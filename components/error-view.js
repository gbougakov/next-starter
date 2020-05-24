import Layout from "./layout";
import Content from "./content";
import ButtonRow from "./buttonrow";
import Button from "./button";
import ShortTextField from "./shorttextfield";
import LongTextField from "./longtextfield";
import { useState } from "react";

export default function ErrorView(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comments, setComments] = useState('')
  const [isLoading, setLoading] = useState('')
  const [isSubmitted, setSubmitted] = useState(false)

  return <Layout>
    {isSubmitted ? <>
      <Content>
        <h1 className="text-3xl font-bold leading-none mt-2">Thanks!</h1>
        <p className="mt-2">
          Your feedback will help us solve the issue faster. You rock! 😎
        </p>
      </Content>
    </> : <>
      <Content>
        <h1 className="text-3xl font-bold leading-none mt-2 text-red-600">Something went wrong</h1>
        <p className="mt-2">
          Our team has been notified. We'd be really thankful if you tell us what happened below
        </p>

        <p className="mt-4 text-sm leading-tight">Your name</p>
        <ShortTextField type="text" autocomplete="name" value={name} onChange={e => setName(e.target.value)} className={`mt-1 w-full`} placeholder="Richard Hendricks"></ShortTextField>

        <p className="mt-4 text-sm leading-tight">Your email</p>
        <ShortTextField type="email" autocomplete="email" value={email} onChange={e => setEmail(e.target.value)} className={`mt-1 w-full`} placeholder="r.hendricks@piedpiper.com"></ShortTextField>

        <p className="mt-4 text-sm leading-tight">What happened?</p>
        <LongTextField type="email" autocomplete="email" value={comments} onChange={e => setComments(e.target.value)} className={`mt-1 w-full`} placeholder="I clicked on 'Submit' and then this screen appeared"></LongTextField>
      </Content>
      <ButtonRow>
        <div className="flex flex-col-reverse md:flex-row justify-end w-full">
          <Button 
            disabled={isLoading || !(name && comments && email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))} isLoading={isLoading} 
            accents="bg-indigo-600 border-indigo-600"
            onClick={async () => {
              setLoading(true)
              await fetch(`https://sentry.io/api/0/projects/${process.env.SENTRY_ORG_SLUG}/${process.env.SENTRY_PRJ_SLUG}/user-feedback/`, {
                headers: {
                  Authorization: `DSN ${process.env.SENTRY_DSN}`,
                  'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                  event_id: props.eventId,
                  email,
                  comments,
                  name
                })
              })
              setLoading(false)
              setSubmitted(true)
            }}
          >Report error</Button>
        </div>
      </ButtonRow>
    </>}
  </Layout>
}