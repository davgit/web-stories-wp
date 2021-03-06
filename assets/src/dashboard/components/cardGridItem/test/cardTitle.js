/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */
import moment from 'moment';

/**
 * Internal dependencies
 */
import CardTitle from '../cardTitle';
import { renderWithTheme } from '../../../testUtils';
import { STORY_STATUS } from '../../../constants';

describe('CardTitle', () => {
  it('should render Card Title with static text when edit mode is false', () => {
    const { getByText, queryByTestId } = renderWithTheme(
      <CardTitle
        title="Sample Story"
        displayDate={moment('01/20/2020', 'MM/DD/YYYY')}
        onEditCancel={jest.fn}
        onEditComplete={jest.fn}
        editMode={false}
      />
    );

    expect(queryByTestId('inline-input-form')).toBeNull();
    expect(getByText('Sample Story')).toBeDefined();
  });

  it('should render Card Title with an input field when edit mode is true', () => {
    const { getByDisplayValue, getByLabelText } = renderWithTheme(
      <CardTitle
        title="Sample Story"
        displayDate={moment('01/20/2020', 'MM/DD/YYYY')}
        onEditCancel={jest.fn}
        onEditComplete={jest.fn}
        editMode={true}
        id="sampleStoryId"
      />
    );
    const titleInput = getByDisplayValue('Sample Story');
    const inputLabel = getByLabelText('Rename story');

    expect(inputLabel).toBeDefined();
    expect(titleInput).toBeDefined();
  });

  it(`should prepend "draft" before displayDate when status is ${STORY_STATUS.DRAFT}`, () => {
    const { getByText } = renderWithTheme(
      <CardTitle
        title="Sample Story"
        displayDate={moment('04/23/2020', 'MM/DD/YYYY')}
        status={STORY_STATUS.DRAFT}
        onEditCancel={jest.fn}
        onEditComplete={jest.fn}
        editMode={false}
      />
    );

    expect(getByText('draft')).toBeDefined();
  });

  it(`should display "Scheduled" before created date when ${STORY_STATUS.FUTURE}`, () => {
    const { getByText } = renderWithTheme(
      <CardTitle
        title="Sample Story"
        displayDate={moment('04/23/2020', 'MM/DD/YYYY')}
        status={STORY_STATUS.FUTURE}
        onEditCancel={jest.fn}
        onEditComplete={jest.fn}
        editMode={false}
      />
    );

    expect(getByText(/^Scheduled/)).toBeDefined();
  });

  it(`should display "Published" before created date when ${STORY_STATUS.PUBLISH}`, () => {
    const { getByText } = renderWithTheme(
      <CardTitle
        title="Sample Story"
        displayDate={moment('04/23/2020', 'MM/DD/YYYY')}
        status={STORY_STATUS.PUBLISH}
        onEditCancel={jest.fn}
        onEditComplete={jest.fn}
        editMode={false}
      />
    );

    expect(getByText(/^Published/)).toBeDefined();
  });

  it('should render Card Title with an author', () => {
    const { getByText } = renderWithTheme(
      <CardTitle
        title="Sample Story"
        secondaryTitle="Harry Potter"
        displayDate={moment('01/20/2020', 'MM/DD/YYYY')}
        onEditCancel={jest.fn}
        onEditComplete={jest.fn}
      />
    );

    expect(getByText('Harry Potter')).toBeInTheDocument();
  });
});
