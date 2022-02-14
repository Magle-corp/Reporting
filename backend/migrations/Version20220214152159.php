<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220214152159 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE contract (id INT AUTO_INCREMENT NOT NULL, customer_id_id INT NOT NULL, contract_type_id_id INT NOT NULL, description VARCHAR(255) NOT NULL, rate INT NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_E98F2859B171EB6C (customer_id_id), INDEX IDX_E98F28596809B889 (contract_type_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE contract_type (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE customer (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, surname VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE intervention (id INT AUTO_INCREMENT NOT NULL, customer_id_id INT NOT NULL, contract_id_id INT NOT NULL, date DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', quantity INT NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_D11814ABB171EB6C (customer_id_id), INDEX IDX_D11814AB3C450273 (contract_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE contract ADD CONSTRAINT FK_E98F2859B171EB6C FOREIGN KEY (customer_id_id) REFERENCES customer (id)');
        $this->addSql('ALTER TABLE contract ADD CONSTRAINT FK_E98F28596809B889 FOREIGN KEY (contract_type_id_id) REFERENCES contract_type (id)');
        $this->addSql('ALTER TABLE intervention ADD CONSTRAINT FK_D11814ABB171EB6C FOREIGN KEY (customer_id_id) REFERENCES customer (id)');
        $this->addSql('ALTER TABLE intervention ADD CONSTRAINT FK_D11814AB3C450273 FOREIGN KEY (contract_id_id) REFERENCES contract (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE intervention DROP FOREIGN KEY FK_D11814AB3C450273');
        $this->addSql('ALTER TABLE contract DROP FOREIGN KEY FK_E98F28596809B889');
        $this->addSql('ALTER TABLE contract DROP FOREIGN KEY FK_E98F2859B171EB6C');
        $this->addSql('ALTER TABLE intervention DROP FOREIGN KEY FK_D11814ABB171EB6C');
        $this->addSql('DROP TABLE contract');
        $this->addSql('DROP TABLE contract_type');
        $this->addSql('DROP TABLE customer');
        $this->addSql('DROP TABLE intervention');
    }
}
