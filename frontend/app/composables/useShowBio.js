export default function () {
  // which tab we're looking at
  const showBio = useState('showBio', () => { return false })

  // return the current tab
  return { showBio }
}
