<?php

namespace Eloom\AjaxLayeredNav\Plugin\Category;

class View {
	protected $helper;

	public function __construct(
		\Eloom\AjaxLayeredNav\Helper\Data $helper
	) {
		$this->helper = $helper;
	}

	public function afterExecute(\Magento\Catalog\Controller\Category\View $controller, $page) {
		if ($controller->getRequest()->getParam('ajax_nav')) {
			$request = $controller->getRequest();
			$request->setQueryValue('ajax_nav', null);
			$layout = $page->getLayout();
			$result = [];
			if ($block = $layout->getBlock('category.products')) {
				$result['category_products'] = $block->toHtml();
			}
			if ($block = $layout->getBlock('catalog.leftnav')) {
				$result['catalog_leftnav'] = $block->toHtml();
			}
			if ($block = $layout->getBlock('page.main.title')) {
				$result['page_main_title'] = $block->toHtml();
			}
			$filterManager = $this->helper->getFilterManager();
			$queryValue = $request->getQueryValue();
			$newQueryValue = $queryValue;

			if ($block = $layout->getBlock('catalog.navigation.state')) {
				$filters = $block->getActiveFilters();
				$urlParams = [];
				foreach ($filters as $filter) {
					$filterModel = $filter->getFilter();
					if ($filterModel->getData('skip_seo')) {
						continue;
					}
					$code = $filterModel->getRequestVar();
					if (isset($newQueryValue[$code])) {
						$class = get_class($filterModel);
						if ($class === 'Eloom\AjaxLayeredNav\Model\Layer\Filter\Attribute' || $class === 'Magento\CatalogSearch\Model\Layer\Filter\Attribute') {
							if ((bool)$filterModel->getAttributeModel()->getData('not_seo')) {
								continue;
							}
							$label = $filter->getLabel();
							if (is_array($label)) {
								$newQueryValue[$code] = [];
								foreach ($label as $lb) {
									$newQueryValue[$code][] = $filterManager->translitUrl(htmlspecialchars_decode($lb)) ?: $lb;
								}
								$newQueryValue[$code] = trim(implode(',', $newQueryValue[$code]));
							} else {
								$newQueryValue[$code] = $filterManager->translitUrl(htmlspecialchars_decode($label)) ?: $label;
							}
						} elseif ($class === 'Eloom\AjaxLayeredNav\Model\Layer\Filter\Category' || $class === 'Magento\CatalogSearch\Model\Layer\Filter\Category') {
							$label = $filter->getLabel();
							if (is_array($label)) {
								$codes = explode(',', $newQueryValue[$code]);
								$newQueryValue[$code] = [];
								foreach ($label as $i => $lb) {
									$newQueryValue[$code][] = $codes[$i] . '_' . $filterManager->translitUrl(htmlspecialchars_decode($lb)) ?: $lb;
								}
								$newQueryValue[$code] = trim(implode(',', $newQueryValue[$code]));
							} else {
								$cat = $filterManager->translitUrl(htmlspecialchars_decode($filter->getLabel())) ?: $filter->getLabel();
								$newQueryValue[$code] = $newQueryValue[$code] . '_' . $cat;
							}
						}
					}
				}
				if (isset($newQueryValue['cat'])) {
					if ($request->getParam('id') == $newQueryValue['cat']) {
						$newQueryValue['cat'] = null;
					}
				}
				$newQueryValue['ajax_nav'] = null;
				$result['updated_url'] = $block->getUrl('*/*/*', [
					'_current' => true,
					'_query' => $newQueryValue,
					'_use_rewrite' => true,
				]);
				$result['updated_url'] = str_replace('%2C', ',', $result['updated_url']);
			}
			$json = \Magento\Framework\App\ObjectManager::getInstance()->create('\Magento\Framework\Controller\Result\JsonFactory')->create();
			$json->setData($result);
			return $json;
		} else {
			return $page;
		}
	}
}