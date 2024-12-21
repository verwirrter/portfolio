const terminalOutput = document.querySelector('#terminal-output');
const terminalInput = document.querySelector('#input');
const terminalInputContainer = document.getElementById('terminal-input-container');
const musicPlayer = document.getElementById('background-music');


let matrixRain = {
  characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%+-_!=<>?/.,;:|",
  columns: [],

  start: function() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const rainContainer = document.getElementById("matrix-rain");

      for (let x = 0; x < width / 20; x++) {
          this.columns[x] = {
              xPos: x * 20,
              yPos: Math.random() * height,
              speed: Math.random() * 2 + 1
          };
      }

      function animateRain() {
          rainContainer.innerHTML = '';

          matrixRain.columns.forEach(column => {
              const char = matrixRain.characters.charAt(Math.floor(Math.random() * matrixRain.characters.length));
              const charElem = document.createElement('div');
              charElem.style.position = 'absolute';
              charElem.style.left = column.xPos + 'px';
              charElem.style.top = column.yPos + 'px';
              charElem.style.fontSize = '20px';
              charElem.textContent = char;

              rainContainer.appendChild(charElem);

              column.yPos += column.speed;
              if (column.yPos > height) {
                  column.yPos = 0;
              }
          });

          requestAnimationFrame(animateRain);
      }

      animateRain();
  },

  stop: function() {
      document.getElementById("matrix-rain").innerHTML = '';
  }
};

terminalInput.addEventListener('input', () => {
  const inputText = terminalInput.value.trim().toLowerCase();

  // Get matching commands
  const matchingCommands = Object.keys(commands).filter(cmd => cmd.startsWith(inputText));

  if (matchingCommands.length === 1) {
      terminalInput.value = matchingCommands[0];
      terminalInput.setSelectionRange(inputText.length, matchingCommands[0].length);
  }
});

terminalInput.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
      e.preventDefault();
      const inputText = terminalInput.value.trim().toLowerCase();

      const matchingCommands = Object.keys(commands).filter(cmd => cmd.startsWith(inputText));

      if (matchingCommands.length === 1) {
          terminalInput.value = matchingCommands[0];
      } else if (matchingCommands.length > 1) {
          const suggestionText = `Suggestions: ${matchingCommands.join(', ')}`;
          const suggestionElem = document.createElement('p');
          suggestionElem.innerHTML = `<span class="line-number">${lineNumber++}</span> ${suggestionText}`;
          terminalOutput.appendChild(suggestionElem);
          terminalOutput.scrollTop = terminalOutput.scrollHeight;
      }
  }
});


const commands = {
    help: `
        <div style="flex: 1; margin-left: 20px;">
        <p style="font-weight: bold; text-decoration: underline;">Available Commands</p>
        <div style="display: flex; flex-wrap: wrap; gap: 5px;">
            <p style="background-color: #9BA9FF; color:rgb(241, 241, 255);">help</p>
            <p style="background-color: #9BA9FF; color:rgb(241, 241, 255);">clear</p>
            <p style="background-color: #9BA9FF; color:rgb(241, 241, 255);">neofetch</p>
            <p style="background-color: #9BA9FF; color:rgb(241, 241, 255);">whoami</p>
            <p style="background-color: #9BA9FF; color:rgb(241, 241, 255);">ifconfig</p>
            <p style="background-color: #9BA9FF; color:rgb(241, 241, 255);">readme</p>
            <p style="background-color: #9BA9FF; color:rgb(241, 241, 255);">cd</p>
            <p style="background-color: #9BA9FF; color:rgb(241, 241, 255);">rices</p>
            <p style="background-color: #9BA9FF; color:rgb(241, 241, 255);">setup</p>
            <p style="background-color: #9BA9FF; color:rgb(241, 241, 255);">music</p>
            <p style="background-color: #9BA9FF; color:rgb(241, 241, 255);">music stop</p>
        </div>
    </div>`,
    neofetch: `
        <div style="display: flex; align-items: center; justify-content: flex-start; margin-bottom: 20px;">
            <img src="https://i.ibb.co/yqYVftv/mwachuu.jpg" alt="jonas@codes" style="width: 200px; height: auto; margin-right: 20px; margin-left: 20px; border-radius: 5px;">
            <div style="flex: 1; margin-left: 20px;">
                <p>jonass@codes</p>
                <p>--------------</p>
                <p>os: windows 11</p>
                <p>cpu: intel core i5 13600 @ 2700 mhz</p>
                <p>memory: 16gb</p>
                <p>disk: 1tb ssd</p>
                <p>gpu: nvidia rtx 3060 ti founders edition</p>
                <div style="display: flex; flex-wrap: wrap; justify-content: start; margin-top: 20px; width: 180px;">
                  <div style="background-color: #9ba9ff; width: 20px; height: 20px;"></div>
                  <div style="background-color: #a5adff; width: 20px; height: 20px;"></div>
                  <div style="background-color: #afb1ff; width: 20px; height: 20px;"></div>
                  <div style="background-color: #b9b5ff; width: 20px; height: 20px;"></div>
                  <div style="background-color: #c4baff; width: 20px; height: 20px;"></div>
                  <div style="background-color: #cebeff; width: 20px; height: 20px;"></div>
                  <div style="background-color: #d8c2ff; width: 20px; height: 20px;"></div>
                  <div style="background-color: #e2c6ff; width: 20px; height: 20px;"></div>
                  <div style="background-color: #eccaff; width: 20px; height: 20px;"></div>
                </div>
            </div>
        </div>
    `,
    whoami: `
        <div style="display: flex; align-items: flex-start; justify-content: flex-start; margin-bottom: 20px;">
            <pre style="font-family: monospace; font-size: 14px; margin-right: 20px; margin-left: 20px;">
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡴⣆⠀⠀⠀⠀⠀⣠⡀⠀⠀⠀⠀⠀⠀⣼⣿⡗⠀⠀⠀⠀
⠀⠀⠀⣠⠟⠀⠘⠷⠶⠶⠶⠾⠉⢳⡄⠀⠀⠀⠀⠀⣧⣿⠀⠀⠀⠀⠀
⠀⠀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣤⣤⣤⣤⣤⣿⢿⣄⠀⠀⠀⠀
⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⠙⣷⡴⠶⣦
⠀⠀⢱⡀⠀⠉⠉⠀⠀⠀⠀⠛⠃⠀⢠⡟⠀⠀⠀⢀⣀⣠⣤⠿⠞⠛⠋
⣠⠾⠋⠙⣶⣤⣤⣤⣤⣤⣀⣠⣤⣾⣿⠴⠶⠚⠋⠉⠁⠀⠀⠀⠀⠀⠀
⠛⠒⠛⠉⠉⠀⠀⠀⣴⠟⢃⡴⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠛⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            </pre>
            <div style="flex: 1; margin-left: 20px;">
            <br>
            <br>
            <br>
                <p>hey! i'm jonas =^.^=</p>
                <p>i'm a 15 y/o designer & developer from 🇦🇹</p>
                <p>i love asian food, listening to music and creating new and unique things.</p>
                <p>be sure to visit my github by typing 'readme'!</p>
            </div>
        </div>
    `,
    setup: `
        <div style="display: flex; align-items: flex-start; justify-content: flex-start; margin-bottom: 20px; margin-top: 20px;">
            <div style="flex: 1; margin-left: 20px;">
                <p style="font-weight: bold;">my setup specs! =^.^=</p>
                <p>--------kb--------</p>
                <p>case: weikav sugar65v2</p>
                <p>pcb: 65% hotswap rgb triple connection</p>
                <p>switches: kiiboom jacaranda</p>
                <p>keycaps: osume lilac dreams marshmellow</p>
                <p>-------desk-------</p>
                <p>deskmat: osume ecplise white</p>
                <p>speaker: marshall acton II</p>
                <p>headphones: airpods pro 2</p>
                <p>mouse: logitech g502 lightspeed</p>
                <p>display 1: samsung ue49mu6270</p>
                <p>display 2: lg 27gl850</p>
                <p>-------other-------</p>
                <p>camera: iphone 16</p>
                <p>pc specs: type 'neofetch'</p>
            </div>
        </div>
    `,
    readme: '<a href="https://github.com/verwirrter/verwirrter/blob/main/README.md" class="readme-link" target="_blank">view my readme on github</a>',
    cd: `<p>i can't afford the server costs to buy more pages&nbsp;</p><p style="color: #9BA9FF; background-color:rgb(241, 241, 255);">(╥﹏╥)</p><p>&nbsp;maybe soon tho if you&nbsp;</p><a href="buymeacoffee.com/jonascodes" class="readme-link" target="_blank"> buy me a coffee!</a>`,
    rices: `<p>Soon! <3</p>`,
    ifconfig: async () => {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            return `<span class="ip-address">your ip address: ${data.ip}</span>`;
        } catch (error) {
            return 'error fetching your ip address. please try again later.';
        }
    },
    music: () => {
        if (musicPlayer.paused) {
            musicPlayer.play();
            return 'background music started.';
        } else {
            return 'music is already playing.';
        }
    },
    'music stop': () => {
        if (!musicPlayer.paused) {
            musicPlayer.pause();
            return 'background music stopped.';
        } else {
            return 'music is already stopped.';
        }
    },
    clear: () => {
        terminalOutput.innerHTML = '';
        lineNumber = 1;
        return 'terminal cleared.';
    }
};

let lineNumber = 4;

terminalInput.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter') {
      const input = terminalInput.value.trim().toLowerCase();

      if (input) {
          const userCommand = document.createElement('p');
          userCommand.innerHTML = `<span class="line-number">${lineNumber++}</span> > ${input}`;
          terminalOutput.appendChild(userCommand);

          let responseText;
          if (commands[input]) {
              if (typeof commands[input] === 'function') {
                  responseText = await commands[input]();
              } else {
                  responseText = commands[input];
              }
              const response = document.createElement('p');
              response.innerHTML = `<span class="line-number">${lineNumber++}</span> ${responseText}`;
              terminalOutput.appendChild(response);
          } else {
              const error = document.createElement('p');
              error.innerHTML = `<span class="line-number">${lineNumber++}</span> command not found: ${input}`;
              terminalOutput.appendChild(error);
          }

          terminalOutput.scrollTop = terminalOutput.scrollHeight;
          terminalInput.focus();
          terminalInputContainer.querySelector('.line-number').textContent = lineNumber;
          terminalInput.value = '';
      }
  }
});

matrixRain.start();
