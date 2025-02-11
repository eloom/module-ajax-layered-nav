<?php
declare(strict_types=1);

namespace Eloom\AjaxLayeredNav\Model\Elasticsearch\Adapter\DataMapper;

use Eloom\AjaxLayeredNav\Helper\Data as LayerHelper;
use Eloom\AjaxLayeredNav\Model\ResourceModel\Inventory;
use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Store\Model\StoreManagerInterface;

class Stock {
	/**
	 * @var Inventory
	 */
	private $inventory;

	/**
	 * @var StoreManagerInterface
	 */
	private $storeManager;


	protected $requestVar;

	/**
	 * Stock constructor.
	 * @param Inventory $inventory
	 * @param StoreManagerInterface $storeManager
	 */
	public function __construct(
		Inventory             $inventory,
		StoreManagerInterface $storeManager
	) {
		$this->inventory = $inventory;
		$this->storeManager = $storeManager;
		$this->requestVar = LayerHelper::STOCK_STATUS_CODE;
	}

	/**
	 * @param $entityId
	 * @param $storeId
	 * @return bool[]|int[]
	 * @throws NoSuchEntityException
	 */
	public function map($entityId, $storeId) {
		$sku = $this->inventory->getSkuRelation((int)$entityId);

		if (!$sku) {
			return [$this->requestVar => false];
		}

		$value = $this->inventory->getStockStatus(
			$sku,
			$this->storeManager->getStore($storeId)->getWebsite()->getCode()
		);

		return [$this->requestVar => $value];
	}
}