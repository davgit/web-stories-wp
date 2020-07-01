// /*
//  * Copyright 2020 Google LLC
//  *
//  * Licensed under the Apache License, Version 2.0 (the "License");
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *
//  *     https://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an "AS IS" BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  */

// /**
//  * External dependencies
//  */
// import { renderHook, act } from '@testing-library/react-hooks';

// /**
//  * Internal dependencies
//  */
// import useMediaReducer from '../../useMediaReducer';
// import reducer from '../reducer';
// import * as actionsToWrap from '../../actions';

// describe('reducer', () => {
//   let state;
//   let actions;

//   beforeEach(render);

//   function render() {
//     const { result } = renderHook(() => useMediaReducer(reducer, actionsToWrap));
//     state = result.current.state;
//     actions = result.current.actions;
//   }

//   it('should not update state on fetchMediaSuccess if searchTerm doesn`t match', async () => {
//     await act(async () => await actions.setSearchTerm('search term 1'));

//     await act(async () => await actions.fetchMediaSuccess({
//       searchTerm: 'search term 2',
//       media: [{id: 'id'}],
//       nextPageToken: 'page2',
//       totalPages: 10,
//     }));

//     render();
//     expect(state, expect.objectContaining({
//       searchTerm: 'search term 1',
//       media: [],
//       nextPageToken: undefined,
//     }));
//   });

//   it('should not update state on fetchMediaSuccess if mediaType doesn`t match', async () => {
//     await act(async () => await actions.setMediaType('image'));

//     await act(async () => await actions.fetchMediaSuccess({
//       mediaType: 'video',
//       media: [{id: 'id'}],
//       nextPageToken: 'page2',
//       totalPages: 10,
//     }));

//     render();
//     expect(state, expect.objectContaining({
//       mediaType: 'image',
//       media: [],
//       nextPageToken: undefined,
//     }));
//   });
// });