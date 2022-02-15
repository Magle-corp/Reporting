<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ContractTypeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TimestampableInterface;
use Knp\DoctrineBehaviors\Model\Timestampable\TimestampableTrait;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\Type;
use Symfony\Component\Validator\Constraints\Valid;

#[ORM\Entity(repositoryClass: ContractTypeRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['read:contract_type:item']]
)]
class ContractType implements TimestampableInterface
{
    use TimestampableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 20)]
    #[
        Groups([
            'read:contract_type:item',
            'read:contract:item'
        ]),
        Length(min: 3, max: 20)
    ]
    private $title;

    #[ORM\Column(type: 'string', length: 100)]
    #[
        Groups([
            'read:contract_type:item',
            'read:contract:item'
        ]),
        Length(min: 5, max: 100)
    ]
    private $description;

    #[ORM\OneToMany(mappedBy: 'contract_type_id', targetEntity: Contract::class, orphanRemoval: true)]
    #[
        Type(Contract::class),
        Valid
    ]
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
