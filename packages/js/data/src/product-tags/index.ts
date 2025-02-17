/**
 * Internal dependencies
 */
import { STORE_NAME, WC_PRODUCT_TAGS_NAMESPACE } from './constants';
import { createCrudDataStore } from '../crud';
import { PromiseifySelectors } from '../types/promiseify-selectors';
import { ProductTagSelectors } from './types';

createCrudDataStore( {
	storeName: STORE_NAME,
	resourceName: 'ProductTag',
	pluralResourceName: 'ProductTags',
	namespace: WC_PRODUCT_TAGS_NAMESPACE,
} );

export const EXPERIMENTAL_PRODUCT_TAGS_STORE_NAME = STORE_NAME;

// This is necessary for the correct typing of resolveSelect until the migration to register(storeDescriptor) is complete.
declare module '@wordpress/data' {
	function resolveSelect(
		key: typeof STORE_NAME
	): PromiseifySelectors< ProductTagSelectors >;
}
