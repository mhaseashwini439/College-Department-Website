const API_BASE_URL = 'http://localhost:5000/api';

const handleFetch = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) return options.method === 'POST' || options.method === 'PUT' ? null : [];
    return response.json();
  } catch (error) {
    console.error(`Fetch error for ${url}:`, error);
    return options.method === 'POST' || options.method === 'PUT' ? null : [];
  }
};

export const apiService = {
  // Notices
  getNotices: () => handleFetch(`${API_BASE_URL}/notices`),
  addNotice: (notice) => handleFetch(`${API_BASE_URL}/notices`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(notice),
  }),
  updateNotice: (id, notice) => handleFetch(`${API_BASE_URL}/notices/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(notice),
  }),
  deleteNotice: async (id) => {
    try { await fetch(`${API_BASE_URL}/notices/${id}`, { method: 'DELETE' }); } catch (e) {}
  },

  // Faculty
  getFaculty: () => handleFetch(`${API_BASE_URL}/faculty`),
  addFaculty: (member) => handleFetch(`${API_BASE_URL}/faculty`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(member),
  }),
  updateFaculty: (id, faculty) => handleFetch(`${API_BASE_URL}/faculty/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(faculty),
  }),
  deleteFaculty: async (id) => {
    try { await fetch(`${API_BASE_URL}/faculty/${id}`, { method: 'DELETE' }); } catch (e) {}
  },

  // Timetables
  getTimetables: () => handleFetch(`${API_BASE_URL}/timetables`),
  addTimetable: (item) => handleFetch(`${API_BASE_URL}/timetables`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  }),

  // Syllabus
  getSyllabus: () => handleFetch(`${API_BASE_URL}/syllabus`),

  // Events
  getEvents: () => handleFetch(`${API_BASE_URL}/events`),

  // Admin Auth
  login: (username, password) => handleFetch(`${API_BASE_URL}/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  }),

  // Books
  getBooks: () => handleFetch(`${API_BASE_URL}/books`),
};
