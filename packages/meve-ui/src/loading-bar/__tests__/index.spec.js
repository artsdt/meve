import LoadingBar from '..'
import { delay } from '../../utils/jest'

test('test loading bar start to finish', async () => {
  LoadingBar.start()
  expect(document.body.innerHTML).toMatchSnapshot()

  await delay(16)
  expect(document.body.innerHTML).toMatchSnapshot()

  LoadingBar.finish()
  await delay(16)
  expect(document.body.innerHTML).toMatchSnapshot()
})

test('test loading bar error', async () => {
  LoadingBar.error()
  expect(document.body.innerHTML).toMatchSnapshot()

  await delay(16)
  expect(document.body.innerHTML).toMatchSnapshot()
})
