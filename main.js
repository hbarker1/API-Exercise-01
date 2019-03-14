$(() => {
    $.get('https://www.reddit.com/r/aww/.json', (resolveData) => {
        console.log(resolveData.data.children);

       resolveData.data.children.forEach((child) => {
            console.log(child.data.title);
            $("body").append(`<h1>${child.data.title}</h1>`);
            $("body").append(`<img src="${child.data.thumbnail}"/>`);


        });
      

        // });
    });

});