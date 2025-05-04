const treeData = [
    {
        title: "burnthis.space home",
        url: "https://burnthis.space/",
        target: 1,
    },
    {
        title: "Soundcloud",
        url: "https://soundcloud.com/itsjustaburner",
        target: 0,
    },
    {
        title: "Ninaprotocol",
        url: "https://www.ninaprotocol.com/profiles/ijab",
        target: 1,
    },
    {
        title: "Bandcamp",
        url: "https://itsjustaburner.bandcamp.com/",
        target: 0,
    },
    {
        title: "Instagram",
        url: "https://www.instagram.com/itsjustaburner/",
        target: 0,
    },
    {
        title: "Instagram 2",
        url: "https://www.instagram.com/lukaszmauro/",
        target: 0,
    },

    {
        title: "Youtube",
        url: "https://www.youtube.com/@itsjustaburner",
        target: 0,
    },
    {
        title: "Spotify",
        url: "https://open.spotify.com/artist/6GBjApD3lOK9w4wjWyG9GX",
        target: 0,
    },
    {
        title: "Spotify 2",
        url: "https://open.spotify.com/artist/1vsuONnnP6y0854MRVuAYr",
        target: 0,
    },
    {
        title: "Marblefreedomtrust",
        url: "https://marblefreedomtrust.us/",
        target: 0,
    },
    {
        title: "Twitch",
        url: "https://www.twitch.tv/ijaburner",
        target: 0,
    },
    {
        title: "Neocities",
        url: "https://neocities.org/site/ijab",
        target: 0,
    },
    {
        title: "X",
        url: "https://x.com/_itsjustaburner",
        target: 0,
    },
    // {
    //     title: "",
    //     url: "",
    //     target: 0,
    // },
    // {
    //     title: "",
    //     url: "",
    //     target: 0,
    // },
    // {
    //     title: "",
    //     url: "",
    //     target: 0,
    // },
    // {
    //     title: "",
    //     url: "",
    //     target: 0,
    // },
    // {
    //     title: "",
    //     url: "",
    //     target: 0,
    // },
    // {
    //     title: "",
    //     url: "",
    //     target: 0,
    // },
]


const linkDump = document.getElementById("linkTree");

const renderLinkDump = () => {

    treeData.map(link => {

        const linkFrag = document.createDocumentFragment();
        const linkRow = document.createElement("a");
        linkRow.setAttribute("href", link.url);
        linkRow.innerText = link.title;
        linkRow.classList.add('link-btn');
        if (link.target === 1){
            linkRow.classList.add("l-target")
        }
        linkFrag.appendChild(linkRow);
        linkDump.appendChild(linkFrag)
    })
}

renderLinkDump();
