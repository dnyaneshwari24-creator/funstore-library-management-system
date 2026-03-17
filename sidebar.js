// Shared sidebar builder — included in every page
function sidebarHTML(activePage, session) {
  const s = session || getSession() || {};
  const roleName = s.roleName || '';
  const isAdminUser = roleName === 'Administrator';
  const avatar = avatarLetter(s.name || '?');

  const links = [
    { id: 'dashboard', href: 'dashboard.html', icon: '📊', label: 'Dashboard' },
    { id: 'books',     href: 'books.html',     icon: '📚', label: 'Books' },
    { id: 'issues',    href: 'issues.html',     icon: '📋', label: 'Issues & Borrows' },
    { id: 'students',  href: 'students.html',   icon: '🎓', label: 'Students' },
    { id: 'members',   href: 'members.html',    icon: '👥', label: 'Members' },
  ];

  if (isAdminUser) {
    links.push({ id: 'users', href: 'users.html', icon: '🔑', label: 'Users & Roles' });
  }

  const navHTML = links.map(l =>
    `<a href="${l.href}" class="nav-item ${activePage === l.id ? 'active' : ''}">
      <span class="nav-icon">${l.icon}</span>${l.label}
    </a>`
  ).join('');

  return `
    <div class="sidebar-logo">
      <span class="logo-icon">📚</span>
      <div><h2>Funstore</h2><span>Library System</span></div>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section">Navigation</div>
      ${navHTML}
    </nav>
    <div class="sidebar-footer">
      <div class="user-info">
        <div class="user-avatar">${avatar}</div>
        <div>
          <div class="user-name">${s.name || 'User'}</div>
          <div class="user-role">${roleName}</div>
        </div>
      </div>
      <button class="logout-btn" onclick="logout()">🚪 Logout</button>
    </div>
  `;
}
