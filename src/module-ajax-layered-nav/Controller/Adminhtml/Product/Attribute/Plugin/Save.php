<?php

namespace Eloom\AjaxLayeredNav\Controller\Adminhtml\Product\Attribute\Plugin;

use Magento\Catalog\Controller\Adminhtml\Product\Attribute;
use Magento\Framework\App\RequestInterface;
use Magento\Swatches\Model\Swatch;

/**
 * Plugin for product attribute save controller.
 */
class Save {
	/**
	 * @param Attribute\Save $subject
	 * @param RequestInterface $request
	 * @return array
	 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
	 */
	public function beforeDispatch(Attribute\Save $subject, RequestInterface $request) {
		$data = $request->getPostValue();
		$customStyle = empty($data['custom_style']) ? '' : $data['custom_style'];
		$skipSEO = empty($data['not_seo']) ? 0 : (int)$data['not_seo'];
		$extraOptions = ['custom_style' => $customStyle, 'not_seo' => $skipSEO];
		$data['extra_options'] = json_encode($extraOptions);
		$request->setPostValue($data);
		return [$request];
	}
}
