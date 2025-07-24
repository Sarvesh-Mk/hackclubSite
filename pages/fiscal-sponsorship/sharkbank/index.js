import Meta from '@hackclub/meta'
import Head from 'next/head'
import Link from 'next/link'
import { Balancer } from 'react-wrap-balancer'
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Link as UILink,
  Text
} from 'theme-ui'
import ForceTheme from '../../../components/force-theme'
import Nav from '../../../components/nav'
import Footer from '../../../components/footer'
import Photo from '../../../components/photo'
import OuternetImgFile from '../../../public/home/outernet-110.jpg'
import { setCookie, getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import { unfold } from '../../../components/announcement'
import Icon from '@hackclub/icons'

const organizations = [
]

function OpenSourceAlert() {
  return null
}

export default function Page() {
  const [hasReferral, setHasReferral] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    const tubProgram = params.get('tub_program')
    const referral = params.get('referral')
    const referralCookie = getCookie('referral')

    if (referral) {
      setCookie('referral', referral)
      setCookie('tub_program', 'GFGS')
    } else if (tubProgram) {
      setCookie('tub_program', tubProgram)
      setCookie('referral', '')
    }

    setHasReferral(!!referral || !!referralCookie)
  }, [])

  return (
    <>
      <Meta
        as={Head}
        title="Sharkbank!"
        description="Receive up to $1000 in funding for your HCB organization."
        image="/fiscal-sponsorship/og-image.png"
      />
      <ForceTheme theme="light" />
      <Nav />
      <Box
        as="header"
        sx={{
          position: 'relative',
          pt: 6,
          pb: [4, '90px'],
          bg: 'rgb(104, 41, 205)',
          backgroundImage:
            'radial-gradient(ellipse at 5% 5%, #ec555c 0%, rgba(236,85,92,0) 75%),radial-gradient(ellipse at 95% 5%, #dc71a1 0%, rgba(220,113,161,0) 75%),radial-gradient(ellipse at 95% 95%, #fcc8bf 0%, rgba(252,200,191,0) 75%),radial-gradient(ellipse at 5% 95%, #ffce33 0%, rgba(255,206,51,0) 75%)'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            height: '100%',
            zIndex: 0,
            backgroundImage:
              "url('https://hc-cdn.hel1.your-objectstorage.com/s/v3/7c8802fb7ba2076d8872eef60205c0d13354ed8f_image.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Container
          sx={{
            color: 'white',
            position: 'relative',
            zIndex: 1,
            svg: {
              position: 'absolute',
              right: [3, 0],
              bottom: 0,
              width: [114, 200, 300],
              height: [114, 200, 300],
              opacity: 0.5
            }
          }}
        >
          <Heading
            as="h1"
            variant="title"
            sx={{
              fontSize: [5, 6, null, 7],
              // magic number to align with the grid
              mt: -3,
              lineHeight: [null, null, 1.03],
              span: {
                WebkitTextStroke: 'currentColor',
                WebkitTextStrokeWidth: ['2px', '3px'],
                WebkitTextFillColor: 'transparent',
                display: 'block'
              }
            }}
          >
            <span>Shark Bank!</span> Recieve up to $1000 in funding.
          </Heading>
          <Text as="p" variant="lead" sx={{ my: [3, 4] }}>
            <Balancer>
              <strong>Are you a teenager running an organization on HCB? <br/>
              Found yourself in a financial dry spot? <br/> </strong>
              Pitch your organization to our panel of sharks and receive up to 
              $1000 in funding to help you get back on your feet. 
            </Balancer>
          </Text>

          {hasReferral && (
            <Text variant="lead" sx={{ my: [3, 4] }}>
              <Box
                sx={{
                  bg: 'rgba(255, 255, 255, 0.2)',
                  p: 3,
                  borderRadius: 'default',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  mt: 3
                }}
              >
                Apply by <strong>April 16th</strong> using referral code (
                {getCookie('referral')}) and get stickers + fiscal sponsorship
                fees waived for the month of May.
                <Link
                  href="https://docs.google.com/document/d/e/2PACX-1vTPygv_qfd2FnU3Dslt4o69nBlOoKhvWDuexk67ApjuIH96ghjpLjw9wJhsRUtTZYX3XO4EVdxXVx7Q/pub"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Terms apply"
                  style={{ marginLeft: '4px' }}
                >
                  *
                </Link>
              </Box>
            </Text>
          )}

          <Flex
            sx={{
              flexDirection: ['column', 'row'],
              mt: [3, 4],
              gap: [3, 4],
              alignItems: ['start', 'center']
            }}
          >
            <Link href="https://www.fillout.com/" passHref legacyBehavior>
              <Button
                as="a"
                variant="lg"
                sx={{
                  bg: 'blue',
                  backgroundImage: theme => theme.util.gx('cyan', 'blue'),
                  lineHeight: 0.9
                }}
              >
                Apply now
              </Button>
            </Link>
          </Flex>
        </Container>
      </Box>
      <OpenSourceAlert />
      <Box id="organizations" as="section" sx={{ py: [4, 5] }}>
        <Container sx={{}}>
          {/* <Text as="p" variant="headline" sx={{ mt: 0 }}>
            Powering nonprofits at every scale
          </Text> */}
          <Box
            sx={{
              mt: 4,
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Box sx={{ flexGrow: '1' }}></Box>
          </Box>
        </Container>
      </Box>

      <Box id="fees" as="section" sx={{ position: 'relative', py: 5 }}>
        <Container>
          <Grid columns={[null, null, 2]} gap={[4, 5]}>
            <div>
              <Text
                variant="title"
                sx={{ color: 'blue', mb: 2, lineHeight: 0.96 }}
              >
                One simple, transparent fee:
                <br />
                7% of income.
              </Text>
              <Text
                as="p"
                variant="caption"
                color="slate"
                sx={{ maxWidth: '52ch' }}
              >
                This fee goes directly to Hack Club's operations staff,
                including teen interns working under mentors. This allows us to
                deliver best-in-class software and support, grow sustainably,
                while also providing paid career training for young people from
                diverse backgrounds.
              </Text>
            </div>
            <Text
              as="p"
              variant="headline"
              sx={{
                width: 'fit-content',
                gridRow: ['1', 'auto'],
                '@supports (-webkit-background-clip: text)': {
                  backgroundRepeat: 'no-repeat',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundImage:
                    'linear-gradient(to right, #f06844 0%, #ee4c54 25%, #d45e95 50%, #9c6ca6 75%, #6583c1 100%) !important'
                },
                '@supports (-webkit-background-clip: text) and (background: linear-gradient(to right in oklch, white, black)':
                  {
                    backgroundImage:
                      'linear-gradient(to right in oklch, #f06844 0%, #ee4c54 25%, #d45e95 50%, #9c6ca6 75%, #6583c1 100%) !important'
                  }
              }}
              style={{ margin: 0 }}
            >
              Run a teenage led organization?
              <br />
              ---
              <br />
              ---
              <br />
              ---
              <br />
              ---
              <br />
              ---
              <br />
              ---
            </Text>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid
          columns={[null, null, 2]}
          gap={[4, 5]}
          sx={{ py: 5, p: { fontSize: 2, '&:last-child': { mb: 0 } } }}
        >
          <Link href="https://outernet.hackclub.com/">
            <Photo
              src={OuternetImgFile}
              alt="Each year, 1000s of teenagers attend Hack Club events like this"
              showAlt
              sx={{ height: '100%' }}
            />
          </Link>
          <div>
            <Heading as="h2" variant="headline" sx={{ mt: [0, 0] }}>
              Built by Hack Club
            </Heading>
            <p>
              As{' '}
              <Link href="/" passHref legacyBehavior>
                <UILink>Hack Club</UILink>
              </Link>{' '}
              grew, we needed a way to empower our members. We currently have
              over 60,000 high schoolers involved in Hack Club with over 400
              clubs around the world.
            </p>
            <p>
              We started HCB in 2018 to support teen-led clubs and hackathons.
              After showing it to our educational partners, we knew we had
              tapped into something much larger. Today, HCB removes financial
              and legal barriers for thousands doing good in their community.
            </p>
          </div>
        </Grid>
      </Container>

      <Box
        as="section"
        id="apply"
        sx={{
          py: 6,
          px: 3,
          backgroundImage:
            'radial-gradient(ellipse at 5% 5%, #ff0000ff 0%, rgba(232,100,148,0) 75%),radial-gradient(ellipse at 95% 5%, #e86494 0%, rgba(232,100,148,0) 75%),radial-gradient(ellipse at 95% 95%, #baa8d3 0%, rgba(186,168,211,0) 75%),radial-gradient(ellipse at 5% 95%, #fa9f69 0%, rgba(250,159,105,0) 75%)',
          position: 'relative'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            height: '100%',
            zIndex: 0,
            backgroundSize: '48px 48px',
            backgroundImage: `linear-gradient(to right,  #fcc8bf 1px, transparent 1px),
                              linear-gradient(to bottom, #fcc8bf 1px, transparent 1px)`,
            backgroundPosition: 'top left',
            maskImage: `linear-gradient(180deg, transparent 0%, white 3%)`,
            opacity: 0.1
          }}
        />
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: 3
          }}
        >
          <Link href="https://www.fillout.com/" passHref legacyBehavior>
            <Button
              as="a"
              variant="lg"
              sx={{
                bg: 'white',
                mixBlendMode: 'screen',
                color: 'black !important',
                fontSize: [58, 96],
                width: ['100%', 'auto'],
                py: 4,
                px: [4, null, 6],
                lineHeight: 0.9,
                textTransform: 'none'
              }}
            >
              Apply now
            </Button>
          </Link>
          <Text as="p" variant="lead" sx={{ color: 'white', mb: [0, 0] }}>
            <Balancer>No startup fees, no&nbsp;minimum balance.</Balancer>
          </Text>
        </Flex>
      </Box>
      <Footer />
    </>
  )
}
