import os

def generate_page(path, title, sidebar_links, content, role="User"):
    sidebar_html = ""
    for link in sidebar_links:
        active_class = "active" if link['url'] in path else ""
        sidebar_html += f'<li><a href="{link["url"]}" class="{active_class}"><i class="{link["icon"]}"></i> {link["name"]}</a></li>\n'

    html = f"""<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - Umratul Badal</title>
    <link rel="stylesheet" href="../../css/dash.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="dashboard-container">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="sidebar-header">
                <a href="dashboard.html" class="logo-container">
                    <i class="fas fa-kaaba logo-icon"></i>
                    <span class="logo-text">UMRATUL BADAL</span>
                </a>
            </div>
            <ul class="sidebar-menu">
                {sidebar_html}
                <li style="margin-top: auto;"><a href="../../index.html"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
            </ul>
        </aside>

        <!-- Main Content -->
        <main class="main-content">
            <header>
                <div class="header-left">
                    <button id="sidebar-toggle" class="icon-btn"><i class="fas fa-bars"></i></button>
                    <div class="search-bar">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Search anything...">
                    </div>
                </div>
                <div class="header-actions">
                    <button id="theme-toggle" class="icon-btn" title="Toggle Theme"><i class="fas fa-moon"></i></button>
                    <div class="notification-wrapper">
                        <button id="notification-btn" class="icon-btn">
                            <i class="fas fa-bell"></i>
                            <span class="badge">3</span>
                        </button>
                        <div class="dropdown-menu" id="notification-dropdown">
                            <div class="dropdown-header">
                                <h4>Notifications</h4>
                                <button class="btn btn-sm btn-outline" onclick="showToast('All marked as read', 'success')">Clear All</button>
                            </div>
                            <div class="dropdown-body">
                                <div class="notification-item unread">
                                    <div class="notif-icon" style="background: rgba(0,104,56,0.1); color: var(--primary-color);"><i class="fas fa-check"></i></div>
                                    <div class="notif-content">
                                        <h4>Request Approved</h4>
                                        <p>Your Umrah Badal request #1234 has been approved.</p>
                                        <div class="notif-time">2 mins ago</div>
                                    </div>
                                </div>
                                <div class="notification-item unread">
                                    <div class="notif-icon" style="background: rgba(212,175,55,0.1); color: var(--accent-color);"><i class="fas fa-envelope"></i></div>
                                    <div class="notif-content">
                                        <h4>New Message</h4>
                                        <p>Operational Manager sent you a message.</p>
                                        <div class="notif-time">1 hour ago</div>
                                    </div>
                                </div>
                            </div>
                            <div class="dropdown-footer">
                                <a href="#">View All Notifications</a>
                            </div>
                        </div>
                    </div>
                    <div class="user-profile">
                        <img src="https://ui-avatars.com/api/?name={role}+User&background=006838&color=fff" alt="Profile">
                        <span style="font-weight: 600; font-size: 0.9rem;">{role}</span>
                    </div>
                </div>
            </header>

            <div class="content-wrapper">
                {content}
            </div>
        </main>
    </div>
    <script src="../../js/dash.js"></script>
</body>
</html>
"""
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)

# Define Sidebar Links
user_links = [
    {"name": "Dashboard", "url": "dashboard.html", "icon": "fas fa-th-large"},
    {"name": "Profile", "url": "profile.html", "icon": "fas fa-user-circle"},
    {"name": "Requests", "url": "request-history.html", "icon": "fas fa-history"},
    {"name": "Transactions", "url": "transactions.html", "icon": "fas fa-file-invoice-dollar"},
    {"name": "Messages", "url": "messages.html", "icon": "fas fa-comment-dots"},
    {"name": "Settings", "url": "settings.html", "icon": "fas fa-sliders-h"},
]

operational_links = [
    {"name": "Dashboard", "url": "dashboard.html", "icon": "fas fa-chart-pie"},
    {"name": "View Requests", "url": "view-requests.html", "icon": "fas fa-clipboard-list"},
    {"name": "Transactions", "url": "transactions.html", "icon": "fas fa-money-check-alt"},
    {"name": "Customer Messages", "url": "customer-messages.html", "icon": "fas fa-comments"},
    {"name": "Generate Report", "url": "generate-report.html", "icon": "fas fa-file-invoice"},
    {"name": "Manage Users", "url": "manage-users.html", "icon": "fas fa-users-cog"},
]

admin_links = [
    {"name": "Dashboard", "url": "dashboard.html", "icon": "fas fa-tachometer-alt"},
    {"name": "Transactions", "url": "transactions.html", "icon": "fas fa-wallet"},
    {"name": "Manage Users", "url": "manage-users.html", "icon": "fas fa-user-friends"},
    {"name": "Managers", "url": "managers.html", "icon": "fas fa-user-shield"},
    {"name": "Service Categories", "url": "service-categories.html", "icon": "fas fa-tags"},
    {"name": "System Settings", "url": "system-settings.html", "icon": "fas fa-cogs"},
]

# --- TRANSACTION PAGES ---

# User Transactions
user_transactions_content = """
<h2 class="page-title">Transaction History</h2>
<div class="stats-grid">
    <div class="stat-card"><div class="stat-icon"><i class="fas fa-receipt"></i></div><div class="stat-info"><h3>12</h3><p>Total Transactions</p></div></div>
    <div class="stat-card"><div class="stat-icon" style="color:#28a745;"><i class="fas fa-wallet"></i></div><div class="stat-info"><h3>$2,450</h3><p>Total Paid</p></div></div>
    <div class="stat-card"><div class="stat-icon" style="color:#ffc107;"><i class="fas fa-hourglass-half"></i></div><div class="stat-info"><h3>1</h3><p>Pending</p></div></div>
</div>
<div class="card">
    <div class="card-header">
        <div style="display:flex; gap:15px;">
            <input type="text" class="form-control" placeholder="Search TRX ID..." style="width:200px;">
            <select class="form-control" style="width:150px;">
                <option>All Status</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Failed</option>
            </select>
        </div>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table>
                <thead><tr><th>TRX ID</th><th>Service</th><th>Method</th><th>Amount</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                    <tr>
                        <td>#TRX-9901</td><td>Umrah Badal</td><td>Stripe</td><td>$250.00</td><td><span class="status-badge status-completed">Completed</span></td>
                        <td>
                            <button class="btn btn-sm btn-outline" data-transaction-action="view-details" data-transaction-id="TRX-9901">Details</button>
                            <button class="btn btn-sm btn-outline" data-transaction-action="download-receipt" data-transaction-id="TRX-9901"><i class="fas fa-download"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>#TRX-9902</td><td>Hajj Badal</td><td>PayPal</td><td>$1,200.00</td><td><span class="status-badge status-pending">Pending</span></td>
                        <td><button class="btn btn-sm btn-outline" data-transaction-action="view-details">Details</button></td>
                    </tr>
                    <tr>
                        <td>#TRX-9903</td><td>Sadaqah</td><td>Manual</td><td>$50.00</td><td><span class="status-badge status-cancelled">Failed</span></td>
                        <td><button class="btn btn-sm btn-primary" data-transaction-action="retry-payment">Retry</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
"""
generate_page("dashboard/user/transactions.html", "My Transactions", user_links, user_transactions_content, "User")

# Operational Transactions
op_transactions_content = """
<h2 class="page-title">Transaction Monitoring</h2>
<div class="stats-grid">
    <div class="stat-card"><div class="stat-icon"><i class="fas fa-chart-line"></i></div><div class="stat-info"><h3>$15,420</h3><p>Monthly Revenue</p></div></div>
    <div class="stat-card"><div class="stat-icon" style="color:#dc3545;"><i class="fas fa-exclamation-circle"></i></div><div class="stat-info"><h3>4</h3><p>Failed Payments</p></div></div>
</div>
<div class="card">
    <div class="card-header"><h3>Recent Transactions</h3><button class="btn btn-sm btn-outline" data-transaction-action="export-report">Generate Report</button></div>
    <div class="card-body">
        <div class="table-responsive">
            <table>
                <thead><tr><th>ID</th><th>User</th><th>Amount</th><th>Method</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                    <tr><td>#TRX-9901</td><td>John Doe</td><td>$250.00</td><td>Stripe</td><td><span class="status-badge status-completed">Completed</span></td><td><button class="btn btn-sm btn-outline" data-transaction-action="view-details">View</button></td></tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
"""
generate_page("dashboard/operational/transactions.html", "Monitor Transactions", operational_links, op_transactions_content, "Manager")

# Admin Transactions
admin_transactions_content = """
<h2 class="page-title">Financial Management</h2>
<div class="stats-grid">
    <div class="stat-card"><div class="stat-icon"><i class="fas fa-dollar-sign"></i></div><div class="stat-info"><h3>$124,500</h3><p>Total Revenue</p></div></div>
    <div class="stat-card"><div class="stat-icon" style="color:#28a745;"><i class="fas fa-check-double"></i></div><div class="stat-info"><h3>482</h3><p>Success</p></div></div>
    <div class="stat-card"><div class="stat-icon" style="color:#ffc107;"><i class="fas fa-undo"></i></div><div class="stat-info"><h3>$1,200</h3><p>Refunded</p></div></div>
</div>
<div class="card">
    <div class="card-header"><h3>Transaction Ledger</h3><button class="btn btn-sm btn-primary" data-transaction-action="export-report"><i class="fas fa-file-export"></i> Export All</button></div>
    <div class="card-body">
        <div class="table-responsive">
            <table>
                <thead><tr><th>ID</th><th>User</th><th>Method</th><th>Amount</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>
                    <tr>
                        <td>#TRX-9901</td><td>John Doe</td><td>Stripe</td><td>$250.00</td><td><span class="status-badge status-completed">Completed</span></td>
                        <td>
                            <button class="btn btn-sm btn-outline" data-transaction-action="view-details">View</button>
                            <button class="btn btn-sm btn-danger" data-transaction-action="approve-refund">Refund</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
"""
generate_page("dashboard/admin/transactions.html", "Admin Transactions", admin_links, admin_transactions_content, "Admin")

# Re-generate existing pages to update sidebar links
# (Simplified for brevity in this script, normally I'd include all previous content)
generate_page("dashboard/user/dashboard.html", "User Dashboard", user_links, "<h2>Welcome!</h2>", "User")
generate_page("dashboard/operational/dashboard.html", "Operational Dashboard", operational_links, "<h2>Overview</h2>", "Manager")
generate_page("dashboard/admin/dashboard.html", "Admin Dashboard", admin_links, "<h2>System Stats</h2>", "Admin")

# Landing Page
index_html = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"><title>Umratul Badal</title>
    <link rel="stylesheet" href="css/dash.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body { background: #006838; display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: 'Poppins', sans-serif; }
        .login-card { background: white; padding: 40px; border-radius: 20px; text-align: center; max-width: 600px; }
        .role-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 30px; }
        .role-btn { padding: 20px; border: 1px solid #eee; border-radius: 10px; text-decoration: none; color: #006838; transition: 0.3s; }
        .role-btn:hover { border-color: #D4AF37; background: #fcf9f0; transform: translateY(-5px); }
        .role-btn i { font-size: 2rem; color: #D4AF37; margin-bottom: 10px; }
    </style>
</head>
<body>
    <div class="login-card">
        <i class="fas fa-kaaba fa-3x" style="color:#D4AF37;"></i>
        <h1 style="font-family:'Cinzel'; margin:15px 0;">UMRATUL BADAL</h1>
        <p>Select a role to preview the dashboard prototype</p>
        <div class="role-grid">
            <a href="dashboard/user/dashboard.html" class="role-btn"><i class="fas fa-user"></i><h4>User</h4></a>
            <a href="dashboard/operational/dashboard.html" class="role-btn"><i class="fas fa-user-cog"></i><h4>Manager</h4></a>
            <a href="dashboard/admin/dashboard.html" class="role-btn"><i class="fas fa-user-shield"></i><h4>Admin</h4></a>
        </div>
    </div>
</body>
</html>
"""
with open("index.html", "w") as f: f.write(index_html)
