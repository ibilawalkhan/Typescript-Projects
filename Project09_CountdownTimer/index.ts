function calculateTimeRemaining(targetDate: Date): number {
    const currentDate = new Date()
    const timeDifference = targetDate.getTime() - currentDate.getTime()
    return timeDifference
}

function formatTime(milliseconds: number): string {
    const seconds = Math.floor(milliseconds / 1000) % 60
    const minutes = Math.floor(milliseconds / (1000 * 60)) % 60
    const hours = Math.floor(milliseconds / (1000 * 60 * 60)) % 24
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24))

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

function startCountdown(targetDate: Date): void {
    const intervalId = setInterval(() => {
        const timeRemaining = calculateTimeRemaining(targetDate)

        if (timeRemaining > 0) {
            const formattedTime = formatTime(timeRemaining)
            console.clear()
            console.log(`Countdown Timer: `)
            console.log(`Time remaining: ${formattedTime}`)
        } else {
            console.clear()
            console.log(`Countdown Timer:`)
            console.log(`Time's up`)
            clearInterval(intervalId)
        }
    }, 1000)
}

const targetDate = new Date('2023-09-10T12:00:00')
startCountdown(targetDate)