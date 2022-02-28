<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['read:user:item']]
)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups('read:user:item')]
    private $id;

    #[ORM\Column(type: 'string', length: 180, unique: true)]
    #[Groups('read:user:item')]
    private $email;

    #[ORM\Column(type: 'json')]
    #[Groups('read:user:item')]
    private $roles = [];

    #[ORM\Column(type: 'string')]
    private $password;

    #[ORM\OneToMany(mappedBy: 'created_by', targetEntity: Customer::class)]
    private $customers;

    #[ORM\OneToMany(mappedBy: 'created_by', targetEntity: Contract::class)]
    private $contracts;

    #[ORM\OneToMany(mappedBy: 'created_by', targetEntity: ContractType::class)]
    private $contractTypes;

    public function __construct()
    {
        $this->customers = new ArrayCollection();
        $this->contracts = new ArrayCollection();
        $this->contractTypes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    /**
     * @return Collection|Customer[]
     */
    public function getCustomers(): Collection
    {
        return $this->customers;
    }

    public function addCustomer(Customer $customer): self
    {
        if (!$this->customers->contains($customer)) {
            $this->customers[] = $customer;
            $customer->setCreatedBy($this);
        }

        return $this;
    }

    public function removeCustomer(Customer $customer): self
    {
        if ($this->customers->removeElement($customer)) {
            // set the owning side to null (unless already changed)
            if ($customer->getCreatedBy() === $this) {
                $customer->setCreatedBy(null);
            }
        }

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
            $contract->setCreatedBy($this);
        }

        return $this;
    }

    public function removeContract(Contract $contract): self
    {
        if ($this->contracts->removeElement($contract)) {
            // set the owning side to null (unless already changed)
            if ($contract->getCreatedBy() === $this) {
                $contract->setCreatedBy(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ContractType[]
     */
    public function getContractTypes(): Collection
    {
        return $this->contractTypes;
    }

    public function addContractType(ContractType $contractType): self
    {
        if (!$this->contractTypes->contains($contractType)) {
            $this->contractTypes[] = $contractType;
            $contractType->setCreatedBy($this);
        }

        return $this;
    }

    public function removeContractType(ContractType $contractType): self
    {
        if ($this->contractTypes->removeElement($contractType)) {
            // set the owning side to null (unless already changed)
            if ($contractType->getCreatedBy() === $this) {
                $contractType->setCreatedBy(null);
            }
        }

        return $this;
    }
}
