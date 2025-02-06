<?php

namespace Eloom\AjaxLayeredNav\Plugin\Catalog\Model;

use Magento\Store\Model\StoreManagerInterface;

class Config {
	protected $helper;

	public function __construct(
		\Eloom\AjaxLayeredNav\Helper\Data $helper
	) {
		$this->helper = $helper;

	}

	/**
	 * Adding custom options and changing labels
	 *
	 * @param \Magento\Catalog\Model\Config $catalogConfig
	 * @param [] $options
	 * @return []
	 */
	public function afterGetAttributeUsedForSortByArray(\Magento\Catalog\Model\Config $catalogConfig, $options) {
		if ($this->helper->enableSortByRating() && !$this->helper->isMagentoUp24()) {
			$options[$this->helper->getRatingCode()] = $this->helper->getRatingSortLabel();
		}
		return $options;
	}
}


