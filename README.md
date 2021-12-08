# Giveaway-Bot-
A Discord Giveaway bot written in Discord.js to create & enjoy Feature rich and Seamless Giveaways within your very own Discord guild!
# Hosting
**Requirements** - Node.js v16+ and Discord.js version 13.
<h3>Choose a hosting platform -</h3>
<h4><a href = https://repl.it/github/Mr-aahir/Giveaway-Bot->Repl.it</a></h4>
<h4><a href = https://glitch.com/edit/#!/import/github/Mr-aahir/Giveaway-Bot->Glitch</a></h4>
<h3>Step 1: Install the Dependencies</h3>
Linux -

```
apt install nodejs npm -y
curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
chmod 777 nodesource_setup.sh
./nodesource_setup.sh
apt install nodejs -y
npm install
```

Windows - 

```
# https://nodejs.org/en/blog/release/v16.0.0/ get node.js
npm install 
```

<h3> Step 2: Obtain a Bot Token From <a href = https://discord.com/developers>Here

<h3> Step 3: Replace the Token in config.json</h3>
We are done with the setup, now we can host it
Run with node -

```
node index.js
```

Run with pm2 - 

```
npm install -g pm2@latest
pm2 start --name "Giveaway" index.js --watch
```
