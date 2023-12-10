const sendEmbed = (embed, webhook) => {
    embed.color = Math.floor(Math.random() * 16777214) + 1;

    const embeds = [embed];

    const message = {
        embeds: embeds,
    };

    const embedJson = JSON.stringify(message);

    fetch(webhook, {
        method: "POST",
        body: embedJson,
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.text())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
};

module.exports = { sendEmbed };
