<?php

namespace Eloom\AjaxLayeredNav\Setup;

use Magento\Framework\Setup\ModuleContextInterface;
use Magento\Framework\Setup\SchemaSetupInterface;
use Magento\Framework\Setup\UpgradeSchemaInterface;

class UpgradeSchema implements UpgradeSchemaInterface {

	public function upgrade(SchemaSetupInterface $setup, ModuleContextInterface $context) {
		$setup->startSetup();

		if (!$setup->getConnection()->tableColumnExists($setup->getTable('catalog_eav_attribute'), 'extra_options')) {
			$setup->getConnection()
				->addColumn(
					$setup->getTable('catalog_eav_attribute'),
					'extra_options',
					[
						'type' => \Magento\Framework\DB\Ddl\Table::TYPE_TEXT,
						'default' => null,
						'nullable' => true,
						'comment' => 'Extra Options',
					]
				);
		}
		$setup->endSetup();
	}
}
