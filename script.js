// ============================================
// GLOBAL STATE & DATA
// ============================================
let currentPage = 'dashboard';
let notifications = [
    { id: 1, title: 'New patient registered', message: 'Patient ID: P001 registered in Village A', time: '2 hours ago', read: false },
    { id: 2, title: 'Low stock alert', message: 'Paracetamol stock is below threshold', time: '5 hours ago', read: false },
    { id: 3, title: 'Follow-up reminder', message: '5 patients need follow-up visits today', time: '1 day ago', read: false },
    { id: 4, title: 'ASHA worker sync', message: 'ASHA worker Priya completed data sync', time: '2 days ago', read: true },
    { id: 5, title: 'Immunization due', message: '10 children due for vaccination this week', time: '3 days ago', read: true }
];

let patients = [
    { id: 'P001', name: 'Rajesh Kumar', age: 45, village: 'Village A', asha: 'Priya Sharma', lastVisit: '2024-01-15', risk: 'high' },
    { id: 'P002', name: 'Sunita Devi', age: 28, village: 'Village B', asha: 'Meera Singh', lastVisit: '2024-01-14', risk: 'medium' },
    { id: 'P003', name: 'Amit Patel', age: 35, village: 'Village A', asha: 'Priya Sharma', lastVisit: '2024-01-13', risk: 'low' },
    { id: 'P004', name: 'Kavita Yadav', age: 32, village: 'Village C', asha: 'Anita Verma', lastVisit: '2024-01-12', risk: 'medium' },
    { id: 'P005', name: 'Ramesh Singh', age: 55, village: 'Village B', asha: 'Meera Singh', lastVisit: '2024-01-11', risk: 'high' },
    { id: 'P006', name: 'Lakshmi Nair', age: 25, village: 'Village A', asha: 'Priya Sharma', lastVisit: '2024-01-10', risk: 'low' },
    { id: 'P007', name: 'Vikram Reddy', age: 40, village: 'Village C', asha: 'Anita Verma', lastVisit: '2024-01-09', risk: 'medium' },
    { id: 'P008', name: 'Geeta Sharma', age: 30, village: 'Village B', asha: 'Meera Singh', lastVisit: '2024-01-08', risk: 'low' }
];

let ashaWorkers = [
    { id: 'A001', name: 'Priya Sharma', village: 'Village A', followUp: 95, households: 120, pending: 5, lastSync: '2024-01-15 10:30', status: 'online' },
    { id: 'A002', name: 'Meera Singh', village: 'Village B', followUp: 88, households: 110, pending: 12, lastSync: '2024-01-15 09:15', status: 'online' },
    { id: 'A003', name: 'Anita Verma', village: 'Village C', followUp: 92, households: 105, pending: 8, lastSync: '2024-01-14 18:00', status: 'offline' },
    { id: 'A004', name: 'Sushma Devi', village: 'Village D', followUp: 75, households: 95, pending: 20, lastSync: '2024-01-13 14:20', status: 'nosync' },
    { id: 'A005', name: 'Rekha Patel', village: 'Village E', followUp: 90, households: 100, pending: 10, lastSync: '2024-01-15 11:00', status: 'online' }
];

let inventory = [
    { id: 'I001', name: 'Paracetamol 500mg', category: 'Medicines', stock: 45, threshold: 50, lastRestocked: '2024-01-10' },
    { id: 'I002', name: 'ORS Packets', category: 'Supplies', stock: 120, threshold: 100, lastRestocked: '2024-01-12' },
    { id: 'I003', name: 'Antibiotics', category: 'Medicines', stock: 30, threshold: 40, lastRestocked: '2024-01-08' },
    { id: 'I004', name: 'Bandages', category: 'Supplies', stock: 200, threshold: 150, lastRestocked: '2024-01-14' },
    { id: 'I005', name: 'Vaccine Vials', category: 'Vaccines', stock: 0, threshold: 20, lastRestocked: '2024-01-05' },
    { id: 'I006', name: 'Syringes', category: 'Supplies', stock: 80, threshold: 100, lastRestocked: '2024-01-11' },
    { id: 'I007', name: 'Thermometers', category: 'Equipment', stock: 15, threshold: 20, lastRestocked: '2024-01-09' }
];

let languageLabels = {
    en: {
        dashboard: 'Dashboard',
        patients: 'Patient Analytics',
        asha: 'ASHA Workers',
        reports: 'Reports & Analytics',
        inventory: 'Inventory',
        totalPatients: 'Total Patients',
        activeAsha: 'Active ASHA Workers',
        followUpCompletion: 'Follow-up Completion',
        pendingHighPriority: 'Pending High Priority Cases'
    },
    hi: {
        dashboard: 'डैशबोर्ड',
        patients: 'रोगी विश्लेषण',
        asha: 'आशा कार्यकर्ता',
        reports: 'रिपोर्ट और विश्लेषण',
        inventory: 'इन्वेंटरी',
        totalPatients: 'कुल रोगी',
        activeAsha: 'सक्रिय आशा कार्यकर्ता',
        followUpCompletion: 'फॉलो-अप पूर्णता',
        pendingHighPriority: 'लंबित उच्च प्राथमिकता के मामले'
    },
    ta: {
        dashboard: 'டாஷ்போர்டு',
        patients: 'நோயாளி பகுப்பாய்வு',
        asha: 'ஆஷா தொழிலாளர்கள்',
        reports: 'அறிக்கைகள் மற்றும் பகுப்பாய்வு',
        inventory: 'சரக்கு',
        totalPatients: 'மொத்த நோயாளிகள்',
        activeAsha: 'செயலில் உள்ள ஆஷா தொழிலாளர்கள்',
        followUpCompletion: 'பின்தொடர்தல் நிறைவு',
        pendingHighPriority: 'நிலுவையில் உள்ள உயர் முன்னுரிமை வழக்குகள்'
    }
};

let currentLanguage = 'en';
let currentAdminName = 'Admin';
let notificationSettings = { enabled: true };
let themeMode = localStorage.getItem('themeMode') || 'light';

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initializeLogin();
    initializeDashboard();
    renderNotifications();
    initializeTheme();
});

// ============================================
// LOGIN FUNCTIONALITY
// ============================================
function initializeLogin() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation
    if (!username || !password) {
        alert('Please enter both username and password');
        return;
    }

    // Update admin name
    currentAdminName = username;
    const adminNameEl = document.getElementById('adminName');
    const userAvatarEl = document.getElementById('userAvatar');
    if (adminNameEl) {
        adminNameEl.innerText = username;
    }
    if (userAvatarEl) {
        userAvatarEl.textContent = username.charAt(0).toUpperCase();
    }

    // Hide login, show dashboard with smooth transition
    const loginScreen = document.getElementById('loginScreen');
    const dashboardScreen = document.getElementById('dashboardScreen');
    
    loginScreen.style.opacity = '0';
    setTimeout(() => {
        loginScreen.style.display = 'none';
        dashboardScreen.style.display = 'flex';
        dashboardScreen.style.opacity = '0';
        setTimeout(() => {
            dashboardScreen.style.opacity = '1';
            dashboardScreen.style.transition = 'opacity 0.3s ease';
        }, 10);
    }, 200);
    
    // Load dashboard
    loadPage(renderDashboard);
}

// ============================================
// DASHBOARD INITIALIZATION
// ============================================
function initializeDashboard() {
    // Hamburger menu
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sidebar = document.getElementById('sidebar');
    
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }

    // Sidebar navigation
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            if (page) {
                // Update active state
                menuItems.forEach(mi => mi.classList.remove('active'));
                this.classList.add('active');
                
                // Close sidebar on mobile
                sidebar.classList.remove('open');
                
                // Load page
                currentPage = page;
                switchPage(page);
            }
        });
    });

    // Notification bell
    const notificationBell = document.getElementById('notificationBell');
    const notificationDropdown = document.getElementById('notificationDropdown');
    
    if (notificationBell) {
        notificationBell.addEventListener('click', function(e) {
            e.stopPropagation();
            notificationDropdown.classList.toggle('show');
        });
    }

    // Close notification dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (notificationDropdown && !notificationBell.contains(e.target) && !notificationDropdown.contains(e.target)) {
            notificationDropdown.classList.remove('show');
        }
    });

    // Language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            currentLanguage = this.value;
            updateLanguageLabels();
        });
    }

    // Mark all as read
    const markAllRead = document.querySelector('.mark-all-read');
    if (markAllRead) {
        markAllRead.addEventListener('click', function() {
            notifications.forEach(n => n.read = true);
            renderNotifications();
        });
    }

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

// ============================================
// THEME MANAGEMENT
// ============================================
function initializeTheme() {
    if (themeMode === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeIcon(true);
    } else {
        document.body.classList.remove('dark-mode');
        updateThemeIcon(false);
    }
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    themeMode = isDark ? 'dark' : 'light';
    localStorage.setItem('themeMode', themeMode);
    updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = isDark ? '☀️' : '🌙';
    }
}

// ============================================
// PAGE SWITCHING
// ============================================
function switchPage(page) {
    switch(page) {
        case 'dashboard':
            loadPage(renderDashboard);
            break;
        case 'patients':
            loadPage(renderPatientAnalytics);
            break;
        case 'asha':
            loadPage(renderAshaAnalytics);
            break;
        case 'reports':
            loadPage(renderReports);
            break;
        case 'inventory':
            loadPage(renderInventory);
            break;
        case 'settings':
            loadPage(renderSettings);
            break;
        default:
            loadPage(renderDashboard);
    }
}

function loadPage(renderer) {
    const content = document.getElementById('content');
    if (content) {
        content.innerHTML = '';
        renderer();
    }
}

// ============================================
// NOTIFICATIONS
// ============================================
function renderNotifications() {
    const notificationList = document.getElementById('notificationList');
    const notificationBadge = document.getElementById('notificationBadge');
    
    if (!notificationList) return;

    const unreadCount = notifications.filter(n => !n.read).length;
    if (notificationBadge) {
        notificationBadge.textContent = unreadCount;
        notificationBadge.style.display = unreadCount > 0 ? 'flex' : 'none';
    }

    notificationList.innerHTML = '';
    notifications.forEach(notification => {
        const item = document.createElement('div');
        item.className = `notification-item ${!notification.read ? 'unread' : ''}`;
        item.innerHTML = `
            <div class="notification-title">${notification.title}</div>
            <div class="notification-time">${notification.time}</div>
        `;
        item.addEventListener('click', function() {
            notification.read = true;
            renderNotifications();
        });
        notificationList.appendChild(item);
    });
}

// ============================================
// LANGUAGE SYSTEM
// ============================================
function updateLanguageLabels() {
    const labels = languageLabels[currentLanguage];
    // Update menu items
    const menuItems = document.querySelectorAll('.menu-item');
    const menuTexts = ['dashboard', 'patients', 'asha', 'reports', 'inventory'];
    menuItems.forEach((item, index) => {
        const textSpan = item.querySelector('.menu-text');
        if (textSpan && labels[menuTexts[index]]) {
            textSpan.textContent = labels[menuTexts[index]];
        }
    });
}

// ============================================
// DASHBOARD OVERVIEW
// ============================================
function renderDashboard() {
    const content = document.getElementById('content');
    const labels = languageLabels[currentLanguage];
    
    content.innerHTML = `
        <div class="page-header">
            <h1>Dashboard Overview</h1>
            <p>Welcome to AshaConnect PHC Dashboard</p>
        </div>

        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-label">Total Patients</div>
                <div class="metric-value">${patients.length}</div>
                <div class="metric-change">+12% from last month</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Active ASHA Workers</div>
                <div class="metric-value">${ashaWorkers.filter(a => a.status === 'online').length}</div>
                <div class="metric-change">${ashaWorkers.length} total workers</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Follow-up Completion</div>
                <div class="metric-value">${Math.round(ashaWorkers.reduce((sum, a) => sum + a.followUp, 0) / ashaWorkers.length)}%</div>
                <div class="metric-change">+5% improvement</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Pending High Priority Cases</div>
                <div class="metric-value">${patients.filter(p => p.risk === 'high').length}</div>
                <div class="metric-change" style="color: var(--danger);">Requires attention</div>
            </div>
        </div>

        <div class="chart-container">
            <div class="chart-title">Immunization Trend (Last 6 Months)</div>
            <canvas id="immunizationChart"></canvas>
        </div>

        <div class="activity-list">
            <h2 style="margin-bottom: 1rem; color: var(--text-dark);">Recent Activity</h2>
            ${renderRecentActivity()}
        </div>
    `;

    // Render chart
    setTimeout(() => {
        renderImmunizationChart();
    }, 100);
}

function renderRecentActivity() {
    const activities = [
        { icon: '👤', title: 'New patient registered', time: '2 hours ago' },
        { icon: '💉', title: 'Immunization completed for 5 children', time: '4 hours ago' },
        { icon: '📋', title: 'Follow-up visit completed', time: '6 hours ago' },
        { icon: '👩‍⚕️', title: 'ASHA worker data sync completed', time: '1 day ago' },
        { icon: '📦', title: 'Inventory restocked', time: '2 days ago' }
    ];

    return activities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon">${activity.icon}</div>
            <div class="activity-content">
                <div class="activity-title">${activity.title}</div>
                <div class="activity-time">${activity.time}</div>
            </div>
        </div>
    `).join('');
}

function renderImmunizationChart() {
    const ctx = document.getElementById('immunizationChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
            datasets: [{
                label: 'Immunizations',
                data: [120, 135, 150, 145, 160, 175],
                borderColor: '#2b6cb0',
                backgroundColor: 'rgba(43, 108, 176, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// ============================================
// PATIENT ANALYTICS
// ============================================
let filteredPatients = [...patients];

function renderPatientAnalytics() {
    const content = document.getElementById('content');
    
    content.innerHTML = `
        <div class="page-header">
            <h1>Patient Analytics</h1>
            <p>Manage and analyze patient data</p>
        </div>

        <div class="page-header-actions">
            <button class="btn btn-primary" onclick="openAddPatientModal()">+ Add Patient</button>
            <button class="btn btn-export" onclick="printPatientSummary()">Print Summary</button>
        </div>

        <div class="filters-section">
            <div class="filter-group">
                <label>Search</label>
                <input type="text" id="patientSearch" placeholder="Search by name, ID, or village...">
            </div>
            <div class="filter-group">
                <label>Status</label>
                <select id="statusFilter">
                    <option value="">All Status</option>
                    <option value="high">High Risk</option>
                    <option value="medium">Medium Risk</option>
                    <option value="low">Low Risk</option>
                </select>
            </div>
            <div class="filter-group">
                <label>Village</label>
                <select id="villageFilter">
                    <option value="">All Villages</option>
                    <option value="Village A">Village A</option>
                    <option value="Village B">Village B</option>
                    <option value="Village C">Village C</option>
                </select>
            </div>
        </div>

        <div class="patient-table-container">
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Village</th>
                        <th>Assigned ASHA</th>
                        <th>Last Visit</th>
                        <th>Risk Level</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="patientTableBody">
                    ${renderPatientTable()}
                </tbody>
            </table>
        </div>
    `;

    // Add event listeners
    document.getElementById('patientSearch').addEventListener('input', filterPatients);
    document.getElementById('statusFilter').addEventListener('change', filterPatients);
    document.getElementById('villageFilter').addEventListener('change', filterPatients);
}

function renderPatientTable() {
    return filteredPatients.map(patient => `
        <tr>
            <td>${patient.id}</td>
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.village}</td>
            <td>${patient.asha}</td>
            <td>${patient.lastVisit}</td>
            <td>
                <span class="risk-${patient.risk}">
                    ${patient.risk.charAt(0).toUpperCase() + patient.risk.slice(1)}
                </span>
            </td>
            <td>
                <div style="display: flex; gap: 0.5rem;">
                    <button class="btn" style="padding: 0.25rem 0.75rem; font-size: 0.875rem;" onclick="event.stopPropagation(); showPatientDetails('${patient.id}')">View</button>
                    <button class="btn" style="padding: 0.25rem 0.75rem; font-size: 0.875rem;" onclick="event.stopPropagation(); openAssignAshaModal('${patient.id}')">Assign</button>
                    <button class="btn" style="padding: 0.25rem 0.75rem; font-size: 0.875rem;" onclick="event.stopPropagation(); exportPatientRecord('${patient.id}')">Export</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function filterPatients() {
    const searchTerm = document.getElementById('patientSearch').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;
    const villageFilter = document.getElementById('villageFilter').value;

    filteredPatients = patients.filter(patient => {
        const matchesSearch = !searchTerm || 
            patient.name.toLowerCase().includes(searchTerm) ||
            patient.id.toLowerCase().includes(searchTerm) ||
            patient.village.toLowerCase().includes(searchTerm);
        
        const matchesStatus = !statusFilter || patient.risk === statusFilter;
        const matchesVillage = !villageFilter || patient.village === villageFilter;

        return matchesSearch && matchesStatus && matchesVillage;
    });

    document.getElementById('patientTableBody').innerHTML = renderPatientTable();
}

function showPatientDetails(patientId) {
    const patient = patients.find(p => p.id === patientId);
    if (!patient) return;

    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Patient Details</h2>
                <button class="modal-close" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="modal-row">
                    <div class="modal-field">
                        <label>Patient ID</label>
                        <span>${patient.id}</span>
                    </div>
                    <div class="modal-field">
                        <label>Name</label>
                        <span>${patient.name}</span>
                    </div>
                </div>
                <div class="modal-row">
                    <div class="modal-field">
                        <label>Age</label>
                        <span>${patient.age} years</span>
                    </div>
                    <div class="modal-field">
                        <label>Village</label>
                        <span>${patient.village}</span>
                    </div>
                </div>
                <div class="modal-row">
                    <div class="modal-field">
                        <label>Assigned ASHA Worker</label>
                        <span>${patient.asha}</span>
                    </div>
                    <div class="modal-field">
                        <label>Last Visit</label>
                        <span>${patient.lastVisit}</span>
                    </div>
                </div>
                <div class="modal-row">
                    <div class="modal-field">
                        <label>Risk Level</label>
                        <span class="risk-${patient.risk}">
                            ${patient.risk.charAt(0).toUpperCase() + patient.risk.slice(1)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Make functions globally accessible
window.showPatientDetails = showPatientDetails;

function openAddPatientModal() {
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Add New Patient</h2>
                <button class="modal-close" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div class="modal-body">
                <form id="addPatientForm">
                    <div class="form-group">
                        <label>Name *</label>
                        <input type="text" id="newPatientName" required>
                    </div>
                    <div class="form-group">
                        <label>Age *</label>
                        <input type="number" id="newPatientAge" required>
                    </div>
                    <div class="form-group">
                        <label>Village *</label>
                        <select id="newPatientVillage" required>
                            <option value="">Select Village</option>
                            <option value="Village A">Village A</option>
                            <option value="Village B">Village B</option>
                            <option value="Village C">Village C</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Contact</label>
                        <input type="text" id="newPatientContact">
                    </div>
                    <div class="form-group">
                        <label>Assigned ASHA *</label>
                        <select id="newPatientAsha" required>
                            <option value="">Select ASHA Worker</option>
                            ${ashaWorkers.map(a => `<option value="${a.name}">${a.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Category *</label>
                        <select id="newPatientCategory" required>
                            <option value="">Select Category</option>
                            <option value="Maternal">Maternal</option>
                            <option value="Child">Child</option>
                            <option value="Chronic">Chronic</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Notes</label>
                        <textarea id="newPatientNotes" rows="3" style="width: 100%; padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 6px; font-family: inherit;"></textarea>
                    </div>
                    <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                        <button type="submit" class="btn btn-primary">Add Patient</button>
                        <button type="button" class="btn" onclick="this.closest('.modal').remove()">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    document.getElementById('addPatientForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const newId = 'P' + String(patients.length + 1).padStart(3, '0');
        const newPatient = {
            id: newId,
            name: document.getElementById('newPatientName').value,
            age: parseInt(document.getElementById('newPatientAge').value),
            village: document.getElementById('newPatientVillage').value,
            contact: document.getElementById('newPatientContact').value || 'N/A',
            asha: document.getElementById('newPatientAsha').value,
            category: document.getElementById('newPatientCategory').value,
            notes: document.getElementById('newPatientNotes').value || 'N/A',
            lastVisit: new Date().toISOString().split('T')[0],
            risk: 'low'
        };
        patients.push(newPatient);
        filteredPatients = [...patients];
        modal.remove();
        renderPatientAnalytics();
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function openAssignAshaModal(patientId) {
    const patient = patients.find(p => p.id === patientId);
    if (!patient) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Assign ASHA Worker</h2>
                <button class="modal-close" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div class="modal-body">
                <p style="margin-bottom: 1rem;">Patient: <strong>${patient.name}</strong></p>
                <div class="form-group">
                    <label>Select ASHA Worker</label>
                    <select id="assignAshaSelect">
                        ${ashaWorkers.map(a => `<option value="${a.name}" ${a.name === patient.asha ? 'selected' : ''}>${a.name} (${a.village})</option>`).join('')}
                    </select>
                </div>
                <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                    <button class="btn btn-primary" onclick="assignAshaWorker('${patientId}')">Assign</button>
                    <button class="btn" onclick="this.closest('.modal').remove()">Cancel</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    window.assignAshaWorker = function(id) {
        const selectedAsha = document.getElementById('assignAshaSelect').value;
        const p = patients.find(pat => pat.id === id);
        if (p) {
            p.asha = selectedAsha;
            filteredPatients = [...patients];
            modal.remove();
            renderPatientAnalytics();
        }
    };
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function exportPatientRecord(patientId) {
    const patient = patients.find(p => p.id === patientId);
    if (!patient) return;
    
    const csv = `Patient ID,Name,Age,Village,Assigned ASHA,Last Visit,Risk Level\n${patient.id},${patient.name},${patient.age},${patient.village},${patient.asha},${patient.lastVisit},${patient.risk}`;
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `patient_${patient.id}_${patient.name.replace(/\s+/g, '_')}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
}

function printPatientSummary() {
    window.print();
}

window.openAddPatientModal = openAddPatientModal;
window.openAssignAshaModal = openAssignAshaModal;
window.exportPatientRecord = exportPatientRecord;
window.printPatientSummary = printPatientSummary;

// ============================================
// ASHA WORKER ANALYTICS
// ============================================
function renderAshaAnalytics() {
    const content = document.getElementById('content');
    const onlineCount = ashaWorkers.filter(a => a.status === 'online').length;
    const offlineCount = ashaWorkers.filter(a => a.status === 'offline').length;
    const avgFollowUp = Math.round(ashaWorkers.reduce((sum, a) => sum + a.followUp, 0) / ashaWorkers.length);

    content.innerHTML = `
        <div class="page-header">
            <h1>ASHA Worker Analytics</h1>
            <p>Monitor ASHA worker performance and status</p>
        </div>

        <div class="asha-summary-grid">
            <div class="asha-summary-card">
                <div class="asha-summary-value">${ashaWorkers.length}</div>
                <div class="asha-summary-label">Total ASHAs</div>
            </div>
            <div class="asha-summary-card">
                <div class="asha-summary-value">${onlineCount}</div>
                <div class="asha-summary-label">Online</div>
            </div>
            <div class="asha-summary-card">
                <div class="asha-summary-value">${offlineCount}</div>
                <div class="asha-summary-label">Offline</div>
            </div>
            <div class="asha-summary-card">
                <div class="asha-summary-value">${avgFollowUp}%</div>
                <div class="asha-summary-label">Avg Follow-up %</div>
            </div>
        </div>

        <div class="chart-container" style="margin-bottom: 2rem;">
            <div class="chart-title">Top 5 ASHA Workers by Follow-up Completion</div>
            <canvas id="ashaChart"></canvas>
        </div>

        <div class="patient-table-container">
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Village</th>
                        <th>Follow-up %</th>
                        <th>Households Done</th>
                        <th>Pending Tasks</th>
                        <th>Last Sync Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${renderAshaTable()}
                </tbody>
            </table>
        </div>
    `;

    // Render chart
    setTimeout(() => {
        renderAshaChart();
    }, 100);
}

function renderAshaTable() {
    return ashaWorkers.map(asha => {
        const statusClass = `badge-${asha.status}`;
        const statusText = asha.status === 'online' ? 'Online' : 
                          asha.status === 'offline' ? 'Offline' : 'No Sync';
        
        return `
            <tr>
                <td>${asha.name}</td>
                <td>${asha.village}</td>
                <td>${asha.followUp}%</td>
                <td>${asha.households}</td>
                <td>${asha.pending}</td>
                <td>${asha.lastSync}</td>
                <td><span class="badge ${statusClass}">${statusText}</span></td>
            </tr>
        `;
    }).join('');
}

function renderAshaChart() {
    const ctx = document.getElementById('ashaChart');
    if (!ctx) return;

    const topAshas = [...ashaWorkers].sort((a, b) => b.followUp - a.followUp).slice(0, 5);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: topAshas.map(a => a.name),
            datasets: [{
                label: 'Follow-up Completion %',
                data: topAshas.map(a => a.followUp),
                backgroundColor: '#2b6cb0'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// ============================================
// REPORTS & ANALYTICS
// ============================================
function renderReports() {
    const content = document.getElementById('content');
    
    content.innerHTML = `
        <div class="page-header">
            <h1>Reports & Analytics</h1>
            <p>Generate comprehensive reports and analytics</p>
        </div>

        <div class="indicators-dashboard">
            <div class="indicator-card">
                <div class="indicator-title">Maternal Health Index</div>
                <div class="indicator-metrics">
                    <div class="indicator-metric">
                        <span class="indicator-label">ANC Coverage %</span>
                        <span class="indicator-value">85%</span>
                    </div>
                    <div class="indicator-metric">
                        <span class="indicator-label">PNC Completion %</span>
                        <span class="indicator-value">78%</span>
                    </div>
                    <div class="indicator-metric">
                        <span class="indicator-label">High-risk pregnancies</span>
                        <span class="indicator-value">12</span>
                    </div>
                </div>
            </div>
            <div class="indicator-card">
                <div class="indicator-title">Child Nutrition Score</div>
                <div class="indicator-metrics">
                    <div class="indicator-metric">
                        <span class="indicator-label">Under-5 Weight Score</span>
                        <span class="indicator-value">72%</span>
                    </div>
                    <div class="indicator-metric">
                        <span class="indicator-label">Stunting Indicator</span>
                        <span class="indicator-value">18%</span>
                    </div>
                    <div class="indicator-metric">
                        <span class="indicator-label">Immunization Score</span>
                        <span class="indicator-value">88%</span>
                    </div>
                </div>
            </div>
            <div class="indicator-card">
                <div class="indicator-title">Chronic Disease Screening</div>
                <div class="indicator-metrics">
                    <div class="indicator-metric">
                        <span class="indicator-label">Hypertension Screening %</span>
                        <span class="indicator-value">65%</span>
                    </div>
                    <div class="indicator-metric">
                        <span class="indicator-label">Diabetes Screening %</span>
                        <span class="indicator-value">58%</span>
                    </div>
                    <div class="indicator-metric">
                        <span class="indicator-label">Total Screenings</span>
                        <span class="indicator-value">245</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="chart-container">
            <div class="chart-title">Village-wise Health Progress</div>
            <canvas id="villageProgressChart"></canvas>
        </div>

        <div class="report-filters">
            <div class="filter-group">
                <label>Time Period</label>
                <select id="timePeriod">
                    <option value="daily">Daily</option>
                    <option value="weekly" selected>Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>
            <div class="filter-group">
                <label>Indicator Type</label>
                <select id="indicatorType">
                    <option value="immunization" selected>Immunization</option>
                    <option value="maternal">Maternal Health</option>
                    <option value="chronic">Chronic Disease</option>
                </select>
            </div>
            <div class="filter-group">
                <button class="btn btn-primary" onclick="updateReport()">Update Report</button>
            </div>
        </div>

        <div class="chart-container">
            <div class="chart-title" id="reportChartTitle">Immunization Report (Weekly)</div>
            <canvas id="reportChart"></canvas>
        </div>

        <div class="export-buttons">
            <button class="btn btn-export" onclick="exportToExcel()">Export to Excel</button>
            <button class="btn btn-export-pdf" onclick="exportToPDF()">Export to PDF</button>
        </div>
    `;

    // Initial chart render
    setTimeout(() => {
        updateReport();
        renderVillageProgressChart();
    }, 100);
}

function renderVillageProgressChart() {
    const ctx = document.getElementById('villageProgressChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Village A', 'Village B', 'Village C', 'Village D', 'Village E'],
            datasets: [
                {
                    label: 'Health Score',
                    data: [85, 78, 82, 75, 80],
                    backgroundColor: '#2b6cb0'
                },
                {
                    label: 'Immunization %',
                    data: [90, 85, 88, 80, 85],
                    backgroundColor: '#10b981'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function updateReport() {
    const timePeriod = document.getElementById('timePeriod').value;
    const indicatorType = document.getElementById('indicatorType').value;
    const chartTitle = document.getElementById('reportChartTitle');
    
    let title = '';
    let labels = [];
    let data = [];

    if (indicatorType === 'immunization') {
        title = `Immunization Report (${timePeriod.charAt(0).toUpperCase() + timePeriod.slice(1)})`;
        if (timePeriod === 'daily') {
            labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            data = [25, 30, 28, 35, 32, 20, 15];
        } else if (timePeriod === 'weekly') {
            labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
            data = [120, 135, 150, 145];
        } else {
            labels = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
            data = [500, 540, 600, 580, 640, 700];
        }
    } else if (indicatorType === 'maternal') {
        title = `Maternal Health Report (${timePeriod.charAt(0).toUpperCase() + timePeriod.slice(1)})`;
        if (timePeriod === 'daily') {
            labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            data = [5, 8, 6, 10, 7, 4, 3];
        } else if (timePeriod === 'weekly') {
            labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
            data = [40, 45, 50, 48];
        } else {
            labels = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
            data = [180, 200, 220, 210, 230, 250];
        }
    } else {
        title = `Chronic Disease Report (${timePeriod.charAt(0).toUpperCase() + timePeriod.slice(1)})`;
        if (timePeriod === 'daily') {
            labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            data = [12, 15, 14, 18, 16, 10, 8];
        } else if (timePeriod === 'weekly') {
            labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
            data = [90, 95, 100, 98];
        } else {
            labels = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
            data = [400, 420, 450, 440, 460, 480];
        }
    }

    chartTitle.textContent = title;

    const ctx = document.getElementById('reportChart');
    if (ctx) {
        // Destroy existing chart if it exists
        if (window.reportChartInstance) {
            window.reportChartInstance.destroy();
        }

        window.reportChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: indicatorType.charAt(0).toUpperCase() + indicatorType.slice(1),
                    data: data,
                    borderColor: '#2b6cb0',
                    backgroundColor: 'rgba(43, 108, 176, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

function exportToExcel() {
    const timePeriod = document.getElementById('timePeriod').value;
    const indicatorType = document.getElementById('indicatorType').value;
    
    // Create CSV content
    let csv = 'Indicator,Value\n';
    const labels = timePeriod === 'daily' ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] :
                   timePeriod === 'weekly' ? ['Week 1', 'Week 2', 'Week 3', 'Week 4'] :
                   ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
    
    const data = timePeriod === 'daily' ? [25, 30, 28, 35, 32, 20, 15] :
                 timePeriod === 'weekly' ? [120, 135, 150, 145] :
                 [500, 540, 600, 580, 640, 700];
    
    labels.forEach((label, index) => {
        csv += `${label},${data[index]}\n`;
    });

    // Create download link
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${indicatorType}_report_${timePeriod}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
}

function exportToPDF() {
    window.print();
}

// Make functions globally accessible
window.updateReport = updateReport;
window.exportToExcel = exportToExcel;
window.exportToPDF = exportToPDF;

// ============================================
// INVENTORY MANAGEMENT
// ============================================
function renderInventory() {
    const content = document.getElementById('content');
    const totalItems = inventory.length;
    const lowStockItems = inventory.filter(i => i.stock < i.threshold && i.stock > 0).length;
    const outOfStockItems = inventory.filter(i => i.stock === 0).length;

    content.innerHTML = `
        <div class="page-header">
            <h1>Inventory & Supply Management</h1>
            <p>Monitor and manage medical supplies and inventory</p>
        </div>

        <div class="inventory-summary-grid">
            <div class="inventory-summary-card">
                <div class="metric-label">Total Stock Items</div>
                <div class="metric-value">${totalItems}</div>
            </div>
            <div class="inventory-summary-card stock-low">
                <div class="metric-label">Low Stock Items</div>
                <div class="metric-value">${lowStockItems}</div>
            </div>
            <div class="inventory-summary-card stock-out">
                <div class="metric-label">Out of Stock</div>
                <div class="metric-value">${outOfStockItems}</div>
            </div>
        </div>

        ${renderLowStockAlerts()}

        <div class="patient-table-container">
            <table class="table">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Category</th>
                        <th>Current Stock</th>
                        <th>Threshold</th>
                        <th>Status</th>
                        <th>Last Restocked</th>
                    </tr>
                </thead>
                <tbody>
                    ${renderInventoryTable()}
                </tbody>
            </table>
        </div>
    `;
}

function renderLowStockAlerts() {
    const lowStock = inventory.filter(i => i.stock <= i.threshold);
    
    if (lowStock.length === 0) {
        return '';
    }

    return `
        <div class="alerts-section">
            <h2 style="margin-bottom: 1rem; color: var(--text-dark);">Stock Alerts</h2>
            ${lowStock.map(item => {
                const isCritical = item.stock === 0;
                return `
                    <div class="alert-item ${isCritical ? 'critical' : ''}">
                        <strong>${item.name}</strong> - 
                        Current stock: ${item.stock} units (Threshold: ${item.threshold} units)
                        ${isCritical ? ' - OUT OF STOCK' : ' - LOW STOCK'}
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function renderInventoryTable() {
    return inventory.map(item => {
        let statusClass = 'badge-success';
        let statusText = 'OK';
        
        if (item.stock === 0) {
            statusClass = 'badge-danger';
            statusText = 'Out of Stock';
        } else if (item.stock < item.threshold) {
            statusClass = 'badge-warning';
            statusText = 'Low Stock';
        }

        return `
            <tr>
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>${item.stock}</td>
                <td>${item.threshold}</td>
                <td><span class="badge ${statusClass}">${statusText}</span></td>
                <td>${item.lastRestocked}</td>
            </tr>
        `;
    }).join('');
}

// ============================================
// SETTINGS PAGE
// ============================================
function renderSettings() {
    const content = document.getElementById('content');
    
    content.innerHTML = `
        <div class="page-header">
            <h1>Settings</h1>
            <p>Manage your account and application preferences</p>
        </div>

        <div class="settings-section">
            <h2>Profile Settings</h2>
            <div class="settings-item">
                <div>
                    <div class="settings-label">Display Name</div>
                    <div style="color: var(--grey-text); font-size: 0.875rem; margin-top: 0.25rem;">Change your display name shown in the dashboard</div>
                </div>
                <div class="settings-control">
                    <input type="text" class="settings-input" id="displayNameInput" value="${currentAdminName}">
                    <button class="btn btn-primary" onclick="updateDisplayName()">Save</button>
                </div>
            </div>
        </div>

        <div class="settings-section">
            <h2>Language Settings</h2>
            <div class="settings-item">
                <div>
                    <div class="settings-label">Application Language</div>
                    <div style="color: var(--grey-text); font-size: 0.875rem; margin-top: 0.25rem;">Select your preferred language</div>
                </div>
                <div class="settings-control">
                    <select class="settings-input" id="languageSettingSelect" onchange="updateLanguageSetting()">
                        <option value="en" ${currentLanguage === 'en' ? 'selected' : ''}>English</option>
                        <option value="hi" ${currentLanguage === 'hi' ? 'selected' : ''}>हिंदी (Hindi)</option>
                        <option value="ta" ${currentLanguage === 'ta' ? 'selected' : ''}>தமிழ் (Tamil)</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="settings-section">
            <h2>Notification Settings</h2>
            <div class="settings-item">
                <div>
                    <div class="settings-label">Enable Notifications</div>
                    <div style="color: var(--grey-text); font-size: 0.875rem; margin-top: 0.25rem;">Receive alerts and notifications</div>
                </div>
                <div class="settings-control">
                    <div class="toggle-switch ${notificationSettings.enabled ? 'active' : ''}" id="notificationToggle" onclick="toggleNotificationSetting()"></div>
                </div>
            </div>
        </div>

        <div class="settings-section">
            <h2>Theme Mode Settings</h2>
            <div class="settings-item">
                <div>
                    <div class="settings-label">Theme Mode</div>
                    <div style="color: var(--grey-text); font-size: 0.875rem; margin-top: 0.25rem;">Switch between light and dark mode</div>
                </div>
                <div class="settings-control">
                    <div class="toggle-switch ${themeMode === 'dark' ? 'active' : ''}" id="themeSettingToggle" onclick="toggleThemeFromSettings()"></div>
                    <span style="color: var(--grey-text); font-size: 0.875rem;">${themeMode === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
                </div>
            </div>
        </div>

        <div class="about-section">
            <h2>About AshaConnect PHC Dashboard</h2>
            <p>
                AshaConnect is a comprehensive Primary Health Centre (PHC) Dashboard designed to streamline healthcare management 
                and improve patient care coordination. This platform enables healthcare administrators to monitor patient analytics, 
                manage ASHA workers, track inventory, and generate comprehensive reports.
            </p>
            <p>
                <strong>Version:</strong> 1.0.0<br>
                <strong>Last Updated:</strong> January 2024<br>
                <strong>Developed for:</strong> Primary Health Centres
            </p>
            <p style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color);">
                For support and inquiries, please contact your system administrator.
            </p>
        </div>
    `;
}

function updateDisplayName() {
    const newName = document.getElementById('displayNameInput').value.trim();
    if (newName) {
        currentAdminName = newName;
        const adminNameEl = document.getElementById('adminName');
        const userAvatarEl = document.getElementById('userAvatar');
        if (adminNameEl) {
            adminNameEl.innerText = newName;
        }
        if (userAvatarEl) {
            userAvatarEl.textContent = newName.charAt(0).toUpperCase();
        }
        alert('Display name updated successfully!');
    }
}

function updateLanguageSetting() {
    const newLang = document.getElementById('languageSettingSelect').value;
    currentLanguage = newLang;
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = newLang;
    }
    updateLanguageLabels();
    alert('Language setting updated!');
}

function toggleNotificationSetting() {
    notificationSettings.enabled = !notificationSettings.enabled;
    const toggle = document.getElementById('notificationToggle');
    if (toggle) {
        toggle.classList.toggle('active', notificationSettings.enabled);
    }
    // In a real app, this would save to backend/localStorage
    localStorage.setItem('notificationSettings', JSON.stringify(notificationSettings));
}

function toggleThemeFromSettings() {
    toggleTheme();
    const toggle = document.getElementById('themeSettingToggle');
    const label = toggle.nextElementSibling;
    if (toggle) {
        toggle.classList.toggle('active', themeMode === 'dark');
    }
    if (label) {
        label.textContent = themeMode === 'dark' ? 'Dark Mode' : 'Light Mode';
    }
}

window.updateDisplayName = updateDisplayName;
window.updateLanguageSetting = updateLanguageSetting;
window.toggleNotificationSetting = toggleNotificationSetting;
window.toggleThemeFromSettings = toggleThemeFromSettings;

