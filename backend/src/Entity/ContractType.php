<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ContractTypeRepository;
use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ContractTypeRepository::class)]
#[ORM\HasLifecycleCallbacks]
#[ApiResource(
    collectionOperations: [
        'get' => ['normalization_context' => ['groups' => ['read:contract_type:collection']]],
        'post' => ['denormalization_context' => ['groups' => ['write:contract_type:item']]]
    ],
    denormalizationContext: ['groups' => ['write:contract_type:item']],
    normalizationContext: ['groups' => ['read:contract_type:item']]
)]
class ContractType
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups([
        'read:contract_type:item',
        'read:contract_type:collection',
        'write:contract_type:item',
        'read:contract:item'
    ])]
    private $title;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups([
        'read:contract_type:item',
        'read:contract_type:collection',
        'write:contract_type:item',
        'read:contract:item'
    ])]
    private $description;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(['read:contract_type:item'])]
    private $created_at;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    #[Groups(['read:contract_type:item'])]
    private $updated_at;

    #[ORM\OneToMany(mappedBy: 'contract_type_id', targetEntity: Contract::class, orphanRemoval: true)]
    private $contracts;

    public function __construct()
    {
        $this->contracts = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

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
            $contract->setContractTypeId($this);
        }

        return $this;
    }

    public function removeContract(Contract $contract): self
    {
        if ($this->contracts->removeElement($contract)) {
            // set the owning side to null (unless already changed)
            if ($contract->getContractTypeId() === $this) {
                $contract->setContractTypeId(null);
            }
        }

        return $this;
    }
}
