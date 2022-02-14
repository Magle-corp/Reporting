<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ContractRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TimestampableInterface;
use Knp\DoctrineBehaviors\Model\Timestampable\TimestampableTrait;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\Type;

#[ORM\Entity(repositoryClass: ContractRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['read:contract:item']]
)]
class Contract implements TimestampableInterface
{
    use TimestampableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: Customer::class, inversedBy: 'contracts')]
    #[ORM\JoinColumn(nullable: false)]
    #[
        Groups(['read:contract:item']),
        Type(Customer::class)
    ]
    private $customer_id;

    #[ORM\ManyToOne(targetEntity: ContractType::class, inversedBy: 'contracts')]
    #[ORM\JoinColumn(nullable: false)]
    #[
        Groups(['read:contract:item']),
        Type(ContractType::class)
    ]
    private $contract_type_id;

    #[ORM\Column(type: 'string', length: 100)]
    #[
        Groups([
            'read:contract:item',
            'read:customer:item',
            'read:intervention:item'
        ]),
        Length(min: 5, max: 100)
    ]
    private $description;

    #[ORM\Column(type: 'integer', length: 4)]
    #[
        Groups([
            'read:contract:item',
            'read:customer:item',
            'read:intervention:item'
        ]),
        Length(min: 1, max: 4)
    ]
    private $rate;

    #[ORM\OneToMany(mappedBy: 'contract_id', targetEntity: Intervention::class, orphanRemoval: true)]
    #[
        Groups(['read:contract:item']),
        Type(Intervention::class)
    ]
    private $interventions;

    public function __construct()
    {
        $this->interventions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCustomerId(): ?Customer
    {
        return $this->customer_id;
    }

    public function setCustomerId(?Customer $customer_id): self
    {
        $this->customer_id = $customer_id;

        return $this;
    }

    public function getContractTypeId(): ?ContractType
    {
        return $this->contract_type_id;
    }

    public function setContractTypeId(?ContractType $contract_type_id): self
    {
        $this->contract_type_id = $contract_type_id;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getRate(): ?int
    {
        return $this->rate;
    }

    public function setRate(int $rate): self
    {
        $this->rate = $rate;

        return $this;
    }

    /**
     * @return Collection|Intervention[]
     */
    public function getInterventions(): Collection
    {
        return $this->interventions;
    }

    public function addIntervention(Intervention $intervention): self
    {
        if (!$this->interventions->contains($intervention)) {
            $this->interventions[] = $intervention;
            $intervention->setContractId($this);
        }

        return $this;
    }

    public function removeIntervention(Intervention $intervention): self
    {
        if ($this->interventions->removeElement($intervention)) {
            // set the owning side to null (unless already changed)
            if ($intervention->getContractId() === $this) {
                $intervention->setContractId(null);
            }
        }

        return $this;
    }
}
