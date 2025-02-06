<?php

namespace Eloom\AjaxLayeredNav\Plugin\Catalog;

class FilterList {
	protected $helper;

	public function __construct(
		\Eloom\AjaxLayeredNav\Helper\Data $helper
	) {
		$this->helper = $helper;
	}

	public function aroundGetFilters(
		\Magento\Catalog\Model\Layer\FilterList $subject,
		\Closure                                $proceed,
		\Magento\Catalog\Model\Layer            $layer) {
		$filters = $proceed($layer);
		if ($this->helper->enableFilterByStockStatus()) {
			$filters[] = $this->helper->getStockFilter($layer);
		}
		if ($this->helper->enableFilterByRating()) {
			$productCollection = $layer->getProductCollection();
			$this->helper->attachRatingAvgPercentFieldToCollection($productCollection);
			$filters[] = $this->helper->getRatingFilter($layer);
		}
		return $filters;
	}

}