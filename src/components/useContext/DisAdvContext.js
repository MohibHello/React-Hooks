/* 
Context Problem:

what happens with our code whenever we have multiple providers and consumers.

Suppose we have three different contexts like...
ThemeContext
LanguageContext
TimezoneContext

below is code snippet...
 */
<ThemeContext.Consumer>
  { theme => {
    <LanguageContext.Consumer>
    {
      language => {
        <TimezoneContext.Consumer>
          {
            timezone => {
              return <div style={{ color: theme }}>{language} {timezone}</div>
            }
          }
        </TimezoneContext.Consumer>
      }
    }
    </LanguageContext.Consumer>
  } 
  }
</ThemeContext.Consumer>