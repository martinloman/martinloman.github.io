(function() {
    const classes = ['baymax-green', 'baymax-red', 'baymax-pink', 'baymax-blue'];
    document.body.classList.remove(...classes);

    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    document.body.classList.add(randomClass);
})();
