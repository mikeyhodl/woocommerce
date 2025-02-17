/**
 * External dependencies
 */

import { registerStore } from '@wordpress/data';
import { Reducer } from 'redux';

/**
 * Internal dependencies
 */
import { STORE_NAME } from './constants';
import * as selectors from './selectors';
import * as actions from './actions';
import * as resolvers from './resolvers';
import reducer, { ProductState, State } from './reducer';
import controls from '../controls';
import type { ProductsSelectors } from './selectors';
import type { PromiseifySelectors } from '../types/promiseify-selectors';

registerStore< State >( STORE_NAME, {
	// @ts-expect-error There are no types for this.
	__experimentalUseThunks: true,
	reducer: reducer as Reducer< ProductState >,
	actions,
	controls,
	selectors,
	resolvers,
} );

export const PRODUCTS_STORE_NAME = STORE_NAME;

// This is necessary for the correct typing of resolveSelect until the migration to register(storeDescriptor) is complete.
declare module '@wordpress/data' {
	function resolveSelect(
		key: typeof STORE_NAME
	): PromiseifySelectors< ProductsSelectors >;
}
