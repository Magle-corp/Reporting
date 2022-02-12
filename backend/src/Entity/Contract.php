<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ContractRepository;
use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ContractRepository::class)]
#[ORM\HasLifecycleCallbacks]
#[ApiResource(
    collectionOperations: [
        'get' => ['normalization_context' => ['groups' => ['read:contract:collection']]],
        'post' => ['denormalization_context' => ['groups' => ['write:contract:item']]]
    ],
    denormalizationContext: ['groups' => ['write:contract:item']],
    normalizationContext: ['groups' => ['read:contract:item']]
)]
class Contract
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: Customer::class, inversedBy: 'contracts')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['read:contract:item'])]
    private $customer_id;

    #[ORM\ManyToOne(targetEntity: ContractType::class, inversedBy: 'contracts')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['read:contract:item'])]
    private $contract_type_id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups([
        'read:contract:item',
        'read:contract:collection',
        'write:contract:item',
        'read:customer:item',
        'read:intervention:item'
    ])]
    private $description;

    #[ORM\Column(type: 'integer')]
    #[Groups([
        'read:contract:item',
        'read:contract:collection',
        'write:contract:item',
        'read:customer:item',
        'read:intervention:item'
    ])]
    private $rate;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(['read:contract:item'])]
    private $created_at;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    #[Groups(['read:contract:item'])]
    private $updated_at;

    #[ORM\OneToMany(mappedBy: 'contract_id', targetEntity: Intervention::class, orphanRemoval: true)]
    #[Groups(['read:contract:item'])]
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

    public function getCreatedAt(): ?DateTimeImmutable
    {
        return $this->created_at;
    }

    #[ORM\PrePersist]
    public function setCreatedAt(): void
    {
        $this->created_at = new DateTimeImmutable();
    }

    public function getUpdatedAt(): ?DateTimeImmutable
    {
        return $this->updated_at;
    }

    #[ORM\PreUpdate]
    public function setUpdatedAt(): void
    {
        $this->updated_at = new DateTimeImmutable();
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
