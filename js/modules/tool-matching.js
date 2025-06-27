

document.addEventListener('DOMContentLoaded', () => {
    const toolOptionsContainer = document.getElementById('tool-options');
    const toolTargets = document.querySelectorAll('#tool-targets .target');
    const feedbackElement = document.getElementById('tool-match-feedback');
    const replayButton = document.getElementById('tool-match-replay');

    let draggedTool = null;
    let matches = 0;
    const totalTools = toolTargets.length;

    
    const initialToolsHTML = `
        <div class="tool" draggable="true" data-match="fire" data-name="Fire">🔥 Fire</div>
        <div class="tool" draggable="true" data-match="axe" data-name="Stone Axe">🪓 Stone Axe</div>
        <div class="tool" draggable="true" data-match="spear" data-name="Spear">🏹 Spear</div>
        <div class="tool" draggable="true" data-match="hammer" data-name="Hammerstone">🪨 Hammerstone</div>
        <div class="tool" draggable="true" data-match="shell" data-name="Shell">🐚 Shell</div>
        <div class="tool" draggable="true" data-match="needle" data-name="Bone Needle">🧵 Bone Needle</div>
    `;

    function shuffleTools() {
        if (!toolOptionsContainer) return;
        const tools = Array.from(toolOptionsContainer.children);
        window.shuffleArray(tools).forEach(tool => toolOptionsContainer.appendChild(tool)); 
    }

    function setupDragAndDrop() {
        
        const tools = document.querySelectorAll('#tool-options .tool');

        tools.forEach(tool => {
            tool.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', tool.getAttribute('data-match'));
                e.dataTransfer.setData('text/name', tool.getAttribute('data-name')); 
                draggedTool = tool;
                tool.classList.add('dragging');
            });

            tool.addEventListener('dragend', () => {
                draggedTool = null;
                
                
                
                
                if (tool.parentElement) tool.classList.remove('dragging');
            });
        });

        toolTargets.forEach(target => {
            const originalUsage = target.getAttribute('data-usage');
            
            
            target.innerHTML = originalUsage; 
            target.classList.remove('correct', 'incorrect', 'filled'); 
            target.style.backgroundColor = ''; 

            target.addEventListener('dragover', e => {
                e.preventDefault();
                
                if (!target.classList.contains('filled')) {
                    target.style.backgroundColor = 'var(--secondary-color-light)'; 
                }
            });

            target.addEventListener('dragleave', () => {
                target.style.backgroundColor = '';
            });
            
            target.addEventListener('drop', e => {
                e.preventDefault();
                target.style.backgroundColor = '';

                if (!draggedTool || target.classList.contains('filled')) return; 

                const droppedToolId = e.dataTransfer.getData('text/plain');
                const droppedToolName = e.dataTransfer.getData('text/name');
                const targetToolId = target.getAttribute('data-target');

                if (droppedToolId === targetToolId) {
                    target.innerHTML = `
                        <div class="tool-label"><strong>${droppedToolName}</strong></div>
                        <div class="tool-usage">${originalUsage}</div>
                    `;
                    feedbackElement.textContent = "✅ Correct match!";
                    feedbackElement.style.color = 'green';
                    target.classList.add('correct', 'filled'); 
                    draggedTool.remove(); 
                    matches++;
                    document.getElementById('correctSound').play(); 

                    if (matches === totalTools) {
                        feedbackElement.textContent = `🎉 You matched all tools correctly! You're a history expert!`;
                        replayButton.style.display = "block"; 
                    }
                } else {
                    feedbackElement.textContent = "❌ That's not right. Try again.";
                    feedbackElement.style.color = 'red';
                    target.classList.add('incorrect');
                    setTimeout(() => target.classList.remove('incorrect'), 1000); 
                }
            });
        });
    }

    function resetToolGame() {
        if (!toolOptionsContainer || !feedbackElement || !replayButton) return;

        matches = 0;
        feedbackElement.textContent = "";
        replayButton.style.display = 'none';

        
        toolOptionsContainer.innerHTML = initialToolsHTML;

        
        toolTargets.forEach(target => {
            target.innerHTML = target.getAttribute('data-usage'); 
            target.classList.remove('correct', 'incorrect', 'filled');
            target.style.backgroundColor = '';
        });

        shuffleTools();
        setupDragAndDrop();
    }

    if (toolOptionsContainer && toolTargets.length > 0) {
        replayButton.addEventListener('click', resetToolGame);
        
        resetToolGame(); 
    } else {
        console.warn("Tool matching game elements not found.");
    }
});