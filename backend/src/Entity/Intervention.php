<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\InterventionRepository;
use DateTimeImmutable;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: InterventionRepository::class)]
#[ORM\HasLifecycleCallbacks()]
#[ApiResource(normalizationContext: ['groups' => ['intervention']])]
class Intervention
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(['intervention', 'read:contract:item'])]
    private $date;

    #[ORM\Column(type: 'integer')]
    #[Groups('intervention')]
    private $quantity;

    #[ORM\ManyToOne(targetEntity: Customer::class, inversedBy: 'interventions')]
    #[ORM\JoinColumn(nullable: false)]
    private $customer_id;

    #[ORM\ManyToOne(targetEntity: Contract::class, inversedBy: 'interventions')]
    #[ORM\JoinColumn(nullable: false)]
    private $contract_id;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups('intervention')]
    private $created_at;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    #[Groups('intervention')]
    private $updated_at;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?DateTimeImmutable
    {
        return $this->date;
    }

    public function setDate(DateTimeImmutable $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
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

    public function getContractId(): ?Contract
    {
        return $this->contract_id;
    }

    public function setContractId(?Contract $contract_id): self
    {
        $this->contract_id = $contract_id;

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
}
