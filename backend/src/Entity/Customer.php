<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CustomerRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TimestampableInterface;
use Knp\DoctrineBehaviors\Model\Timestampable\TimestampableTrait;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: CustomerRepository::class)]
#[ORM\HasLifecycleCallbacks]
#[ApiResource(
    normalizationContext: ['groups' => ['read:customer:item']],
    security: "is_granted('IS_AUTHENTICATED_FULLY')"
)]
class Customer implements TimestampableInterface
{
    use TimestampableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups([
        'read:customer:item',
        'read:contract:item',
        'read:intervention:item'
    ])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups([
        'read:customer:item',
        'read:contract:item',
        'read:intervention:item'
    ])]
    private $name;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups([
        'read:customer:item',
        'read:contract:item',
        'read:intervention:item'
    ])]
    private $surname;

    #[ORM\OneToMany(mappedBy: 'customer_id', targetEntity: Contract::class)]
    #[Groups(['read:customer:item'])]
    private $contracts;

    #[ORM\OneToMany(mappedBy: 'customer_id', targetEntity: Intervention::class)]
    #[Groups(['read:customer:item'])]
    private $interventions;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'customers')]
    private $created_by;

    public function __construct()
    {
        $this->contracts = new ArrayCollection();
        $this->interventions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getSurname(): ?string
    {
        return $this->surname;
    }

    public function setSurname(?string $surname): self
    {
        $this->surname = $surname;

        return $this;
    }

    /**
     * @return Collection|Contract[]
     */
    public function getContracts(): Collection
    {
        return $this->contracts;
    }

    public function addContract(Contract $contract): self
    {
        if (!$this->contracts->contains($contract)) {
            $this->contracts[] = $contract;
            $contract->setCustomerId($this);
        }

        return $this;
    }

    public function removeContract(Contract $contract): self
    {
        if ($this->contracts->removeElement($contract)) {
            // set the owning side to null (unless already changed)
            if ($contract->getCustomerId() === $this) {
                $contract->setCustomerId(null);
            }
        }

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
            $intervention->setCustomerId($this);
        }

        return $this;
    }

    public function removeIntervention(Intervention $intervention): self
    {
        if ($this->interventions->removeElement($intervention)) {
            // set the owning side to null (unless already changed)
            if ($intervention->getCustomerId() === $this) {
                $intervention->setCustomerId(null);
            }
        }

        return $this;
    }

    public function getCreatedBy(): ?User
    {
        return $this->created_by;
    }

    public function setCreatedBy(?User $created_by): self
    {
        $this->created_by = $created_by;

        return $this;
    }
}
