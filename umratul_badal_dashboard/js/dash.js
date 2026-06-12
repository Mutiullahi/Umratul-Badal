/* 
   Umratul Badal (عمرة البدل) Dashboard JS - Fully Interactive Version
   Features: Modals, Notifications, Chat Simulation, Form Handling, Theme Toggle
*/

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSidebar();
    initNotifications();
    initModals();
    initChat();
    initForms();
    initTables();
    initProfileUpload();
    initTransactions();
});

// --- Transaction Management ---
function initTransactions() {
    document.addEventListener('click', (e) => {
        const target = e.target.closest('[data-transaction-action]');
        if (target) {
            const action = target.getAttribute('data-transaction-action');
            const id = target.getAttribute('data-transaction-id');
            handleTransactionAction(action, id);
        }
    });
}

function handleTransactionAction(action, id) {
    if (action === 'view-details') {
        openModal('transaction-details', 'view', id);
    } else if (action === 'download-receipt') {
        showToast(`Downloading receipt for ${id}...`, 'info');
        setTimeout(() => showToast('Receipt downloaded!', 'success'), 1500);
    } else if (action === 'print-receipt') {
        window.print();
    } else if (action === 'retry-payment') {
        showToast(`Retrying payment ${id}...`, 'info');
        setTimeout(() => showToast('Payment successful!', 'success'), 2000);
    } else if (action === 'approve-refund') {
        openModal('confirm', 'approve refund for', id);
    } else if (action === 'reject-refund') {
        openModal('confirm', 'reject refund for', id);
    } else if (action === 'export-report') {
        showToast('Generating report...', 'info');
        setTimeout(() => showToast('Report exported successfully!', 'success'), 2000);
    }
}

// --- Theme Management ---
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme');
            const newTheme = theme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            showToast(`Switched to ${newTheme} mode`, 'info');
        });
    }
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// --- Sidebar ---
function initSidebar() {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Active link highlighting
    const currentPath = window.location.pathname;
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
}

// --- Notifications ---
function initNotifications() {
    const notifBtn = document.getElementById('notification-btn');
    const notifDropdown = document.getElementById('notification-dropdown');
    
    if (notifBtn && notifDropdown) {
        notifBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            notifDropdown.classList.toggle('show');
        });

        document.addEventListener('click', () => {
            notifDropdown.classList.remove('show');
        });

        notifDropdown.addEventListener('click', (e) => e.stopPropagation());

        // Mark as read logic
        const items = notifDropdown.querySelectorAll('.notification-item');
        items.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.remove('unread');
                updateNotifBadge();
            });
        });
    }
}

function updateNotifBadge() {
    const badge = document.querySelector('#notification-btn .badge');
    const unreadCount = document.querySelectorAll('.notification-item.unread').length;
    if (badge) {
        badge.textContent = unreadCount;
        badge.style.display = unreadCount > 0 ? 'flex' : 'none';
    }
}

// --- Modal System ---
function initModals() {
    // Create Modal Overlay if it doesn't exist
    if (!document.querySelector('.modal-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
            <div class="modal-container">
                <div class="modal-header">
                    <h3 id="modal-title">Modal Title</h3>
                    <button class="icon-btn close-modal"><i class="fas fa-times"></i></button>
                </div>
                <div class="modal-body" id="modal-body"></div>
                <div class="modal-footer" id="modal-footer"></div>
            </div>
        `;
        document.body.appendChild(overlay);

        overlay.querySelector('.close-modal').addEventListener('click', closeModal);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });
    }

    // Generic Modal Trigger Logic
    document.addEventListener('click', (e) => {
        const target = e.target.closest('[data-modal]');
        if (target) {
            const modalType = target.getAttribute('data-modal');
            const action = target.getAttribute('data-action');
            const id = target.getAttribute('data-id');
            openModal(modalType, action, id);
        }
    });
}

function openModal(type, action, id) {
    const overlay = document.querySelector('.modal-overlay');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');
    const footer = document.getElementById('modal-footer');

    overlay.classList.add('active');
    
    if (type === 'transaction-details') {
        title.textContent = `Transaction Details - ${id || 'TRX-9901'}`;
        body.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div><label style="font-weight:600; font-size:0.8rem; color:#888;">TRANSACTION ID</label><p>${id || 'TRX-9901'}</p></div>
                <div><label style="font-weight:600; font-size:0.8rem; color:#888;">STATUS</label><p><span class="status-badge status-completed">Completed</span></p></div>
                <div><label style="font-weight:600; font-size:0.8rem; color:#888;">AMOUNT</label><p>$250.00 USD</p></div>
                <div><label style="font-weight:600; font-size:0.8rem; color:#888;">METHOD</label><p>Stripe (Visa **** 4242)</p></div>
                <div><label style="font-weight:600; font-size:0.8rem; color:#888;">DATE</label><p>June 12, 2026 14:30</p></div>
                <div><label style="font-weight:600; font-size:0.8rem; color:#888;">SERVICE</label><p>Umrah Badal Premium</p></div>
            </div>
            <hr style="margin:20px 0; border:0; border-top:1px solid var(--border-color);">
            <div class="form-group"><label>Admin Notes</label><p>Payment verified automatically via Stripe API.</p></div>
        `;
        footer.innerHTML = `
            <button class="btn btn-outline" onclick="closeModal()">Close</button>
            <button class="btn btn-primary" data-transaction-action="print-receipt"><i class="fas fa-print"></i> Print</button>
        `;
    } else if (type === 'confirm') {
        title.textContent = 'Confirm Action';
        body.innerHTML = `<p>Are you sure you want to ${action} this item?</p>`;
        footer.innerHTML = `
            <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
            <button class="btn btn-danger" onclick="handleConfirm('${action}', '${id}')">Confirm</button>
        `;
    } else if (type === 'user-form') {
        title.textContent = action === 'edit' ? 'Edit User' : 'Add New User';
        body.innerHTML = `
            <form id="user-form">
                <div class="form-group"><label>Full Name</label><input type="text" class="form-control" required></div>
                <div class="form-group"><label>Email</label><input type="email" class="form-control" required></div>
                <div class="form-group"><label>Role</label>
                    <select class="form-control">
                        <option>User</option>
                        <option>Operational Manager</option>
                        <option>Admin</option>
                    </select>
                </div>
            </form>
        `;
        footer.innerHTML = `
            <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="handleFormSubmit('User')">Save User</button>
        `;
    } else if (type === 'category-form') {
        title.textContent = action === 'edit' ? 'Edit Category' : 'Add Category';
        body.innerHTML = `
            <form>
                <div class="form-group"><label>Category Name</label><input type="text" class="form-control" value="${id || ''}"></div>
                <div class="form-group"><label>Description</label><textarea class="form-control"></textarea></div>
                <div class="form-group"><label>Icon</label><input type="file" class="form-control"></div>
            </form>
        `;
        footer.innerHTML = `
            <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="handleFormSubmit('Category')">Save Category</button>
        `;
    }
}

function closeModal() {
    document.querySelector('.modal-overlay').classList.remove('active');
}

function handleConfirm(action, id) {
    showToast(`Successfully ${action}ed item ${id || ''}`, 'success');
    closeModal();
}

function handleFormSubmit(type) {
    showToast(`${type} saved successfully!`, 'success');
    closeModal();
}

// --- Chat System ---
function initChat() {
    const chatInput = document.querySelector('.chat-input-wrapper input');
    const chatBtn = document.querySelector('.chat-input-area .btn-primary');
    const chatMessages = document.querySelector('.chat-messages');

    if (chatInput && chatBtn) {
        const sendMessage = () => {
            const text = chatInput.value.trim();
            if (text) {
                appendMessage(text, 'sent');
                chatInput.value = '';
                
                // Simulate response
                setTimeout(() => {
                    appendMessage("Thank you for your message. We will get back to you shortly.", 'received');
                }, 1500);
            }
        };

        chatBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }

    // File upload in chat
    const chatFileBtn = document.querySelector('.chat-input-wrapper .icon-btn');
    if (chatFileBtn) {
        chatFileBtn.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    appendMessage(`Sent a file: ${file.name}`, 'sent');
                    showToast('File uploaded successfully', 'success');
                }
            };
            input.click();
        });
    }
}

function appendMessage(text, type) {
    const chatMessages = document.querySelector('.chat-messages');
    if (!chatMessages) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const msgDiv = document.createElement('div');
    msgDiv.className = `message message-${type}`;
    msgDiv.innerHTML = `
        <div class="message-text">${text}</div>
        <div class="message-time">${time}</div>
    `;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// --- Forms ---
function initForms() {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            if (btn) {
                const originalText = btn.innerHTML;
                btn.disabled = true;
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';
                
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                    showToast('Changes saved successfully!', 'success');
                }, 1000);
            }
        });
    });
}

// --- Tables ---
function initTables() {
    const searchInputs = document.querySelectorAll('.card-header input[type="text"]');
    searchInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const table = input.closest('.card').querySelector('table');
            if (table) {
                const rows = table.querySelectorAll('tbody tr');
                rows.forEach(row => {
                    const text = row.textContent.toLowerCase();
                    row.style.display = text.includes(term) ? '' : 'none';
                });
            }
        });
    });
}

// --- Profile Upload ---
function initProfileUpload() {
    const uploadBtn = document.querySelector('.img-upload-btn');
    const profileImg = document.querySelector('.profile-img-container img');
    
    if (uploadBtn && profileImg) {
        uploadBtn.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        profileImg.src = event.target.result;
                        showToast('Profile picture updated!', 'success');
                    };
                    reader.readAsDataURL(file);
                }
            };
            input.click();
        });
    }
}

// --- Toast System ---
function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };

    toast.innerHTML = `
        <i class="fas ${icons[type] || icons.info}"></i>
        <div class="toast-message">${message}</div>
    `;
    
    container.appendChild(toast);
    
    // Force reflow
    toast.offsetHeight;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
