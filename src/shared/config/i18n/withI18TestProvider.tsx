import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/i18nForTests'

export const withI18TestProvider =
  <P extends object>(
    Component: React.ComponentType<P>
  ): React.ComponentType<P> =>
  (props: P) => {
    return (
      <I18nextProvider i18n={i18n}>
        <Component {...props} />
      </I18nextProvider>
    )
  }
