<script>
	const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
	const textToWrite = "oh. shoot. well, hmm."
	let text = ''
	let cursor = '❚'

	const loop = async () => {
    let blink = () => cursor = cursor === ' ' ? '❚' : ' '
		while (1) {
      if (text === textToWrite){
        setInterval(blink, 400)
        return
      } else if (text.charAt(text.length - 1) === '.'){
        let cursorInterval = setInterval(blink, 400)
        await sleep(1000)
        clearInterval(cursorInterval)
        cursor = '❚'
      }

      text = text + textToWrite.charAt(text.length)

			await sleep((Math.random() * 100) + 20)
		}
	}

	loop()

</script>

<main>
	<p class='text-writer'>{text}{cursor}</p>
</main>

<style>
	main {
		text-align: left;
		font-family: 'Courier New', Courier, monospace;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
    user-select: none;
	}

  .text-writer {
    height: 10rem;
    line-height: 1.5
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>