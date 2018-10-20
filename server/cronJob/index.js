const cronJobCreater = (func, interval) => {
    setInterval(func, interval)
}

module.exports = cronJobCreater;