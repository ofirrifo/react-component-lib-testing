import { render } from '@testing-library/react';

import SingReactUi from './sing-react-ui';

describe('SingReactUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SingReactUi />);
    expect(baseElement).toBeTruthy();
  });
});
