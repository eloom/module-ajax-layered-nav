<?php

namespace Eloom\AjaxLayeredNav\Plugin\Filter;

class Builder {
	protected $helper;

	public function __construct(
		\Eloom\AjaxLayeredNav\Helper\Data $helper
	) {
		$this->helper = $helper;
	}

	public function aroundBuild(
		\Magento\Framework\Search\Adapter\Mysql\Filter\Builder $subject,
		\Closure                                               $proceed,
		\Magento\Framework\Search\Request\FilterInterface      $filter,
		                                                       $condition
	) {
		return $proceed($filter, $condition);
	}

}