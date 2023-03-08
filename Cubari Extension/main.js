document.addEventListener('keydown', function(event) {
    if(event.keyCode == 121) {
        if ( document.body.classList.contains('sidebar-true') ) {
            document.body.classList.remove('sidebar-true');
            document.body.classList.add('sidebar-false');
        }
        else {
            document.body.classList.remove('sidebar-false');
            document.body.classList.add('sidebar-true');
        }
    }
});

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 117) {
        if (document.body.classList.contains('fit-height')) {
            document.body.classList.remove('fit-height');
            document.body.classList.add('fit-width');
        }

        if (document.body.classList.contains('fit-none')) {
            document.body.classList.remove('fit-none');
            document.body.classList.add('fit-width');
        }

        if (document.body.classList.contains('fit-all_limit')) {
            document.body.classList.remove('fit-all_limit');
            document.body.classList.add('fit-width');
        }

        if (document.body.classList.contains('fit-width_limit')) {
            document.body.classList.remove('fit-width_limit');
            document.body.classList.add('fit-width');
        }

        if (document.body.classList.contains('fit-height_limit')) {
            document.body.classList.remove('fit-height_limit');
            document.body.classList.add('fit-width');
        }

        if ( document.body.classList.contains('fit-all') ) {
            document.body.classList.remove('fit-all');
            document.body.classList.add('fit-width');
        }
        else {
            document.body.classList.remove('fit-width');
            document.body.classList.add('fit-all');
        }
    }
});