console.log("DOM Manipulation Script Loaded!");

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. getElementById - Get element by its ID
    console.log("\n=== getElementById Examples ===");
    
    const mainTitle = document.getElementById('main-title');
    const contentSection = document.getElementById('content-section');
    const dynamicContent = document.getElementById('dynamic-content');
    
    console.log("Main title element:", mainTitle);
    console.log("Content section:", contentSection);
    

    // 2. getElementsByClassName - Get elements by their class name (returns HTMLCollection)
    console.log("\n=== getElementsByClassName Examples ===");
    
    const descriptions = document.getElementsByClassName('description');
    const navItems = document.getElementsByClassName('nav-item');
    const infoBoxes = document.getElementsByClassName('info-box');
    
    console.log("Description elements:", descriptions);
    console.log("Navigation items:", navItems);
    console.log("Number of description paragraphs:", descriptions.length);
 

    // 3. getElementsByTagName - Get elements by their tag name (returns HTMLCollection)
    console.log("\n=== getElementsByTagName Examples ===");
    
    const allParagraphs = document.getElementsByTagName('p');
    const allButtons = document.getElementsByTagName('button');
    const allDivs = document.getElementsByTagName('div');
    
    console.log("All paragraphs:", allParagraphs);
    console.log("All buttons:", allButtons);
    console.log("Number of divs:", allDivs.length);
    
    
    // 4. querySelector - Get first element that matches CSS selector
    console.log("\n=== querySelector Examples ===");
    
    const firstDescription = document.querySelector('.description');
    const firstButton = document.querySelector('button');
    const mainHeader = document.querySelector('h1');
    const firstInfoBox = document.querySelector('.info-box .highlight');
    
    console.log("First description:", firstDescription);
    console.log("First button:", firstButton);
    console.log("Main header:", mainHeader);
    
    
    // 5. querySelectorAll - Get all elements that match CSS selector (returns NodeList)
    console.log("\n=== querySelectorAll Examples ===");
    
    const allDescriptions = document.querySelectorAll('.description');
    const allNavItems = document.querySelectorAll('.nav-item');
    const allHighlights = document.querySelectorAll('.highlight');
    const allButtonsQuery = document.querySelectorAll('button');
    
    console.log("All descriptions (querySelectorAll):", allDescriptions);
    console.log("All nav items:", allNavItems);
    console.log("All highlights:", allHighlights);
    

    // Button Event Handlers - Demonstrating createElement, innerHTML, append, and CSS styling
    
    // Button 1: Change Title using innerHTML
    document.getElementById('change-title-btn').addEventListener('click', function() {
        console.log("\n=== innerHTML Example ===");
        const title = document.getElementById('main-title');
        title.innerHTML = '<span style="color: #e74c3c;">🚀 DOM Manipulation Rocks!</span>';
        console.log("Title changed using innerHTML");
    });
    
    // Button 2: Add Paragraph using createElement and append
    document.getElementById('add-paragraph-btn').addEventListener('click', function() {
        console.log("\n=== createElement and append Examples ===");
        
        // Create new paragraph element
        const newParagraph = document.createElement('p');
        newParagraph.className = 'new-paragraph';
        newParagraph.innerHTML = `
            <strong>🎉 New paragraph created!</strong><br>
            Created at: ${new Date().toLocaleTimeString()}<br>
            This was created using <code>createElement()</code> and <code>append()</code>
        `;
        
        // Append to dynamic content area
        dynamicContent.append(newParagraph);
        console.log("New paragraph created and appended");
        
        // Also create a span and append it
        const newSpan = document.createElement('span');
        newSpan.textContent = ' ← Added with append()';
        newSpan.style.color = '#2ecc71';
        newSpan.style.fontWeight = 'bold';
        newParagraph.append(newSpan);
    });
    
    // Button 3: Style Elements manually using JavaScript
    document.getElementById('style-elements-btn').addEventListener('click', function() {
        console.log("\n=== Manual CSS Styling Examples ===");
        
        // Style elements using getElementsByClassName
        for (let i = 0; i < descriptions.length; i++) {
            descriptions[i].style.backgroundColor = '#3498db';
            descriptions[i].style.color = 'white';
            descriptions[i].style.padding = '15px';
            descriptions[i].style.borderRadius = '8px';
            descriptions[i].style.margin = '10px 0';
            descriptions[i].style.border = '2px solid #2980b9';
            descriptions[i].style.transform = 'translateX(10px)';
            descriptions[i].style.transition = 'all 0.3s ease';
        }
        
        // Style navigation items
        for (let navItem of navItems) {
            navItem.style.backgroundColor = '#e74c3c';
            navItem.style.transform = 'scale(1.1)';
            navItem.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
        }
        
        // Style the dynamic content container
        dynamicContent.style.background = 'linear-gradient(45deg, #f39c12, #e67e22)';
        dynamicContent.style.border = '3px solid #d35400';
        dynamicContent.style.boxShadow = 'inset 0 0 20px rgba(0,0,0,0.2)';
        
        console.log("Elements styled manually using JavaScript");
    });
    
    // Button 4: Query Elements and show information
    document.getElementById('query-elements-btn').addEventListener('click', function() {
        console.log("\n=== Query Elements Information ===");
        
        // Create an information display
        const infoDiv = document.createElement('div');
        infoDiv.className = 'created-list';
        infoDiv.style.backgroundColor = '#9b59b6';
        infoDiv.style.padding = '20px';
        infoDiv.style.borderRadius = '10px';
        infoDiv.style.margin = '15px 0';
        infoDiv.style.boxShadow = '0 6px 12px rgba(0,0,0,0.2)';
        
        let infoHTML = '<h4>🔍 DOM Query Results:</h4><ul>';
        
        // Query and display information
        infoHTML += `<li><strong>Total Paragraphs:</strong> ${allParagraphs.length}</li>`;
        infoHTML += `<li><strong>Total Buttons:</strong> ${allButtons.length}</li>`;
        infoHTML += `<li><strong>Total Divs:</strong> ${allDivs.length}</li>`;
        infoHTML += `<li><strong>Description Elements:</strong> ${descriptions.length}</li>`;
        infoHTML += `<li><strong>Navigation Items:</strong> ${navItems.length}</li>`;
        infoHTML += `<li><strong>Info Boxes:</strong> ${infoBoxes.length}</li>`;
        infoHTML += `<li><strong>Current Time:</strong> ${new Date().toLocaleString()}</li>`;
        infoHTML += '</ul>';
        
        infoDiv.innerHTML = infoHTML;
        dynamicContent.append(infoDiv);
        
        console.log("Query results displayed");
    });
    
    // Button 5: Create List using createElement and various methods
    document.getElementById('create-list-btn').addEventListener('click', function() {
        console.log("\n=== createElement Advanced Example ===");
        
        // Create container div
        const listContainer = document.createElement('div');
        listContainer.className = 'created-list';
        
        // Manual CSS styling for the container
        listContainer.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        listContainer.style.color = 'white';
        listContainer.style.padding = '25px';
        listContainer.style.borderRadius = '15px';
        listContainer.style.margin = '20px 0';
        listContainer.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
        listContainer.style.transform = 'scale(0.95)';
        listContainer.style.transition = 'transform 0.3s ease';
        
        // Add hover effect
        listContainer.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1)';
        });
        listContainer.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        // Create title
        const listTitle = document.createElement('h4');
        listTitle.innerHTML = '📋 Dynamically Created List';
        listTitle.style.marginBottom = '15px';
        listTitle.style.borderBottom = '2px solid rgba(255,255,255,0.3)';
        listTitle.style.paddingBottom = '10px';
        
        // Create list
        const list = document.createElement('ul');
        list.style.listStyleType = 'none';
        list.style.padding = '0';
        
        // Array of items to add
        const listItems = [
            '✅ createElement() - Creates new HTML elements',
            '🎯 getElementById() - Finds element by ID',
            '🏷️ getElementsByClassName() - Finds elements by class',
            '🔖 getElementsByTagName() - Finds elements by tag',
            '🎨 querySelector() - Finds first matching element',
            '🎪 querySelectorAll() - Finds all matching elements',
            '📝 innerHTML - Sets/gets HTML content',
            '➕ append() - Adds elements as children',
            '🎭 Manual CSS styling with JavaScript'
        ];
        
        // Create list items
        listItems.forEach((itemText, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = itemText;
            listItem.style.padding = '8px 0';
            listItem.style.borderLeft = '3px solid rgba(255,255,255,0.5)';
            listItem.style.paddingLeft = '15px';
            listItem.style.marginBottom = '5px';
            listItem.style.backgroundColor = 'rgba(255,255,255,0.1)';
            listItem.style.borderRadius = '5px';
            listItem.style.transition = 'all 0.2s ease';
            
            // Add hover effect to list items
            listItem.addEventListener('mouseenter', function() {
                this.style.backgroundColor = 'rgba(255,255,255,0.2)';
                this.style.paddingLeft = '20px';
            });
            listItem.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'rgba(255,255,255,0.1)';
                this.style.paddingLeft = '15px';
            });
            
            list.append(listItem);
        });
        
        // Append elements
        listContainer.append(listTitle);
        listContainer.append(list);
        dynamicContent.append(listContainer);
        
        console.log("Advanced list created with multiple DOM methods");
    });
    

    // Additional demonstrations
    
    // Demonstrate the difference between HTMLCollection and NodeList
    console.log("\n=== HTMLCollection vs NodeList ===");
    console.log("getElementsByClassName returns HTMLCollection (live):", descriptions);
    console.log("querySelectorAll returns NodeList (static):", allDescriptions);
    
    // Demonstrate iterating through collections
    console.log("\n=== Iterating through collections ===");
    
    // HTMLCollection - using traditional for loop
    console.log("Iterating HTMLCollection with for loop:");
    for (let i = 0; i < navItems.length; i++) {
        console.log(`Nav item ${i + 1}:`, navItems[i].textContent);
    }
    
    // NodeList - can use forEach
    console.log("Iterating NodeList with forEach:");
    allNavItems.forEach((item, index) => {
        console.log(`Nav item ${index + 1} (forEach):`, item.textContent);
    });
    
    // Convert HTMLCollection to Array for modern iteration methods
    console.log("Converting HTMLCollection to Array:");
    const navItemsArray = Array.from(navItems);
    navItemsArray.forEach((item, index) => {
        console.log(`Nav item ${index + 1} (Array.from):`, item.textContent);
    });
    
    // Event delegation example using querySelector
    
    // Add click event to dynamically handle clicks on nav items
    document.querySelector('nav').addEventListener('click', function(event) {
        if (event.target.classList.contains('nav-item')) {
            console.log("Navigation item clicked:", event.target.textContent);
            
            // Remove active class from all nav items
            const allNavs = document.querySelectorAll('.nav-item');
            allNavs.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            event.target.classList.add('active');
            
            // Create and append notification
            const notification = document.createElement('div');
            notification.innerHTML = `🎯 Clicked on: <strong>${event.target.textContent}</strong>`;
            notification.style.backgroundColor = '#2ecc71';
            notification.style.color = 'white';
            notification.style.padding = '10px';
            notification.style.margin = '10px 0';
            notification.style.borderRadius = '5px';
            notification.style.animation = 'fadeIn 0.5s ease';
            
            // Add CSS animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `;
            document.head.append(style);
            
            dynamicContent.append(notification);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 3000);
        }
    });
    
    console.log("\n🎉 All DOM manipulation examples are ready!");
    console.log("Click the buttons to see different DOM operations in action.");
});


// Additional utility functions demonstrating DOM methods

// Function to demonstrate innerHTML vs textContent vs innerText
function demonstrateTextMethods() {
    const testDiv = document.createElement('div');
    testDiv.innerHTML = '<strong>Bold text</strong> and <em>italic text</em>';
    
    console.log("innerHTML:", testDiv.innerHTML);
    console.log("textContent:", testDiv.textContent);
    console.log("innerText:", testDiv.innerText);
}

// Function to show how to safely use innerHTML
function safeInnerHTML(element, content) {
    // Create a temporary div to sanitize content
    const tempDiv = document.createElement('div');
    tempDiv.textContent = content;
    element.innerHTML = tempDiv.innerHTML;
}

// Function to demonstrate multiple selector combinations
function demonstrateAdvancedSelectors() {
    console.log("\n=== Advanced Selector Examples ===");
    
    // Descendant selector
    const headerParagraphs = document.querySelectorAll('header p');
    console.log("Paragraphs in header:", headerParagraphs);
    
    // Child selector
    const directChildren = document.querySelectorAll('main > section');
    console.log("Direct section children of main:", directChildren);
    
    // Attribute selector
    const elementsWithId = document.querySelectorAll('[id]');
    console.log("Elements with ID attribute:", elementsWithId);
    
    // Multiple selectors
    const buttonsAndParagraphs = document.querySelectorAll('button, p');
    console.log("All buttons and paragraphs:", buttonsAndParagraphs);
}

// Call demonstration functions after DOM loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        demonstrateTextMethods();
        demonstrateAdvancedSelectors();
    }, 1000);
});