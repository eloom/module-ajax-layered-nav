<?php

namespace Eloom\AjaxLayeredNav\Plugin\Catalog\Product\ProductList;

class Toolbar {
	/**
	 * Plugin
	 *
	 * @param \Magento\Catalog\Block\Product\ProductList\Toolbar $subject
	 * @param \Closure $proceed
	 * @param \Magento\Framework\Data\Collection $collection
	 * @return \Magento\Catalog\Block\Product\ProductList\Toolbar
	 */
	public function aroundSetCollection(
		\Magento\Catalog\Block\Product\ProductList\Toolbar $subject,
		\Closure                                           $proceed,
		                                                   $collection
	) {
		$helper = \Magento\Framework\App\ObjectManager::getInstance()->get(\Eloom\AjaxLayeredNav\Helper\Data::class);
		$order = $subject->getCurrentOrder();
		$direction = $subject->getCurrentDirection();
		$result = $proceed($collection);
		$ratingCode = $helper->getRatingCode();

		if ($ratingCode && ($order == $ratingCode)) {
			$helper->sortByRating($collection, $direction);
		}
		return $result;
	}
}