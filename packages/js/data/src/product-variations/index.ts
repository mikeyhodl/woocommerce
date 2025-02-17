/**
 * External dependencies
 */
import { Reducer } from 'redux';

/**
 * Internal dependencies
 */
import { STORE_NAME, WC_PRODUCT_VARIATIONS_NAMESPACE } from './constants';
import { createCrudDataStore } from '../crud';
import * as actions from './actions';
import * as selectors from './selectors';
import { reducer } from './reducer';
import { ResourceState } from '../crud/reducer';
import { PromiseifySelectors } from '../types/promiseify-selectors';
import { ProductVariationSelectors } from './types';

createCrudDataStore( {
	storeName: STORE_NAME,
	resourceName: 'ProductVariation',
	pluralResourceName: 'ProductVariations',
	namespace: WC_PRODUCT_VARIATIONS_NAMESPACE,
	storeConfig: {
		reducer: reducer as Reducer< ResourceState >,
		actions,
		selectors,
	},
} );

export const EXPERIMENTAL_PRODUCT_VARIATIONS_STORE_NAME = STORE_NAME;

// This is necessary for the correct typing of resolveSelect until the migration to register(storeDescriptor) is complete.
declare module '@wordpress/data' {
	function resolveSelect(
		key: typeof STORE_NAME
	): PromiseifySelectors< ProductVariationSelectors >;
}
