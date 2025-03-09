// Function to add a new time slot
function addSlot() {
    const slotsContainer = document.getElementById('slotsContainer');

    const newSlot = document.createElement('div');
    newSlot.classList.add('slot');

    newSlot.innerHTML = `
        <input type="time" class="from-time" placeholder="From">
        <input type="time" class="to-time" placeholder="To">
        <button type="button" class="remove-slot" onclick="removeSlot(this)">-</button>
    `;
    slotsContainer.appendChild(newSlot);
}

// Function to remove a time slot
function removeSlot(button) {
    button.parentElement.remove();
}

// Function to save profile data
function saveProfile() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const skills = document.getElementById('skills').value;

    const slots = [];
    const fromTimes = document.querySelectorAll('.from-time');
    const toTimes = document.querySelectorAll('.to-time');

    for (let i = 0; i < fromTimes.length; i++) {
        const fromTime = fromTimes[i].value;
        const toTime = toTimes[i].value;

        if (fromTime && toTime) {
            slots.push({ from: fromTime, to: toTime });
        }
    }

    // Profile data object
    const profileData = {
        firstName,
        lastName,
        skills,
        availabilitySlots: slots
    };

    // Log the profile data to the console (can be replaced with an API call)
    console.log('Profile Saved:', profileData);
    alert('Profile saved successfully!');
}
