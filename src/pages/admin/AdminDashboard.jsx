import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users, Calendar, BookOpen, Trophy, Briefcase, CalendarDays, Bell,
  LogOut, ChevronRight, Plus, Pencil, Trash2, X, Save
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';

const sections = [
  { key: 'faculty', label: 'Faculty Manager', icon: Users },
  { key: 'timetable', label: 'Timetable Manager', icon: Calendar },
  { key: 'syllabus', label: 'Syllabus Manager', icon: BookOpen },
  { key: 'toppers', label: 'Topper Manager', icon: Trophy },
  { key: 'placements', label: 'Placement Manager', icon: Briefcase },
  { key: 'events', label: 'Events Manager', icon: CalendarDays },
  { key: 'notices', label: 'Notice Board', icon: Bell },
];

function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h3 className="font-bold text-navy">{title}</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <X size={18} />
          </button>
        </div>
        <div className="p-5">{children}</div>
      </motion.div>
    </div>
  );
}

function InputField({ label, value, onChange, type = 'text', placeholder = '' }) {
  return (
    <div className="mb-3">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
      />
    </div>
  );
}

// ─── Faculty Manager ────────────────────────────────
function FacultyManager({ data, addFaculty, updateFaculty, deleteFaculty }) {
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', designation: '', qualification: '', imageUrl: '', specialization: '', contact: '' });

  const openAdd = () => { setEditing(null); setForm({ name: '', designation: '', qualification: '', imageUrl: '', specialization: '', contact: '' }); setShowModal(true); };
  const openEdit = (item) => { setEditing(item); setForm({ ...item }); setShowModal(true); };

  const handleSave = async () => {
    if (editing) {
      await updateFaculty(editing.id, form);
    } else {
      await addFaculty(form);
    }
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this faculty member?')) {
      await deleteFaculty(id);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-navy">Faculty ({data.faculty.length})</h3>
        <button onClick={openAdd} className="flex items-center gap-1 px-3 py-1.5 bg-primary text-white text-sm rounded-lg hover:bg-primary-hover transition-colors">
          <Plus size={14} /> Add
        </button>
      </div>
      <div className="space-y-2">
        {data.faculty.map(f => (
          <div key={f.id} className="flex items-center justify-between p-3 bg-section-bg rounded-lg">
            <div>
              <p className="font-medium text-navy text-sm">{f.name}</p>
              <p className="text-xs text-gray-500">{f.designation} • {f.qualification}</p>
            </div>
            <div className="flex gap-1">
              <button onClick={() => openEdit(f)} className="p-1.5 hover:bg-white rounded-lg transition-colors"><Pencil size={14} className="text-primary" /></button>
              <button onClick={() => handleDelete(f.id)} className="p-1.5 hover:bg-white rounded-lg transition-colors"><Trash2 size={14} className="text-red-500" /></button>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <Modal title={editing ? 'Edit Faculty' : 'Add Faculty'} onClose={() => setShowModal(false)}>
          <InputField label="Name" value={form.name} onChange={v => setForm({...form, name: v})} placeholder="Faculty name" />
          <InputField label="Designation" value={form.designation} onChange={v => setForm({...form, designation: v})} placeholder="e.g. Assistant Professor" />
          <InputField label="Qualification" value={form.qualification} onChange={v => setForm({...form, qualification: v})} placeholder="e.g. M.Sc. Computer Science" />
          <InputField label="Specialization" value={form.specialization} onChange={v => setForm({...form, specialization: v})} placeholder="e.g. Machine Learning" />
          <InputField label="Contact" value={form.contact} onChange={v => setForm({...form, contact: v})} placeholder="Phone number" />
          <InputField label="Image URL" value={form.imageUrl} onChange={v => setForm({...form, imageUrl: v})} placeholder="Optional image URL" />
          <button onClick={handleSave} className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors">
            <Save size={16} /> {editing ? 'Update' : 'Add'} Faculty
          </button>
        </Modal>
      )}
    </div>
  );
}

// ─── Timetable Manager ────────────────────────────────
function TimetableManager({ data, addTimetable }) {
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ year: '', pdfUrl: '', semester: '' });

  const openAdd = () => { setEditing(null); setForm({ year: '', pdfUrl: '', semester: '' }); setShowModal(true); };
  const openEdit = (item) => { setEditing(item); setForm({ ...item }); setShowModal(true); };

  const handleSave = async () => {
    if (editing) {
      alert('Update not yet implemented for MySQL');
    } else {
      await addTimetable(form);
    }
    setShowModal(false);
  };
<<<<<<< HEAD
// ... rest of component stays same, but uses addTimetable instead of updateData ...
=======
>>>>>>> da8300eed22f507a198d3c58bb189ee71239ad79

  const handleDelete = (id) => {
    // In actual implementation, this would call deleteTimetable from context
    alert('Delete not yet implemented for MySQL');
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-navy">Timetables ({data.timetables.length})</h3>
        <button onClick={openAdd} className="flex items-center gap-1 px-3 py-1.5 bg-primary text-white text-sm rounded-lg hover:bg-primary-hover transition-colors">
          <Plus size={14} /> Add
        </button>
      </div>
      <div className="space-y-2">
        {data.timetables.map(t => (
          <div key={t.id} className="flex items-center justify-between p-3 bg-section-bg rounded-lg">
            <div>
              <p className="font-medium text-navy text-sm">{t.year}</p>
              <p className="text-xs text-gray-500">{t.semester}</p>
            </div>
            <div className="flex gap-1">
              <button onClick={() => openEdit(t)} className="p-1.5 hover:bg-white rounded-lg transition-colors"><Pencil size={14} className="text-primary" /></button>
              <button onClick={() => handleDelete(t.id)} className="p-1.5 hover:bg-white rounded-lg transition-colors"><Trash2 size={14} className="text-red-500" /></button>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <Modal title={editing ? 'Edit Timetable' : 'Add Timetable'} onClose={() => setShowModal(false)}>
          <InputField label="Year" value={form.year} onChange={v => setForm({...form, year: v})} placeholder="e.g. FY BCS" />
          <InputField label="Semester" value={form.semester} onChange={v => setForm({...form, semester: v})} placeholder="e.g. Sem I" />
          <InputField label="PDF URL" value={form.pdfUrl} onChange={v => setForm({...form, pdfUrl: v})} placeholder="Link to PDF" />
          <button onClick={handleSave} className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors">
            <Save size={16} /> {editing ? 'Update' : 'Add'} Timetable
          </button>
        </Modal>
      )}
    </div>
  );
}

// ─── Syllabus Manager ────────────────────────────────
function SyllabusManager({ data, updateData }) {
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ year: '', level: 'UG', semester: '', syllabusUrl: '', pyqUrl: '' });

  const openAdd = () => { setEditing(null); setForm({ year: '', level: 'UG', semester: '', syllabusUrl: '', pyqUrl: '' }); setShowModal(true); };
  const openEdit = (item) => { setEditing(item); setForm({ ...item }); setShowModal(true); };

  const handleSave = () => {
    // In MySQL mode, we would use an API call
    alert('MySQL saving for Syllabus not yet implemented');
    setShowModal(false);
  };

  const handleDelete = (id) => {
    alert('MySQL delete for Syllabus not yet implemented');
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-navy">Syllabus ({data.syllabus.length})</h3>
        <button onClick={openAdd} className="flex items-center gap-1 px-3 py-1.5 bg-primary text-white text-sm rounded-lg hover:bg-primary-hover transition-colors">
          <Plus size={14} /> Add
        </button>
      </div>
      <div className="space-y-2">
        {data.syllabus.map(s => (
          <div key={s.id} className="flex items-center justify-between p-3 bg-section-bg rounded-lg">
            <div>
              <p className="font-medium text-navy text-sm">{s.year} ({s.level})</p>
              <p className="text-xs text-gray-500">Semester: {s.semester}</p>
            </div>
            <div className="flex gap-1">
              <button onClick={() => openEdit(s)} className="p-1.5 hover:bg-white rounded-lg transition-colors"><Pencil size={14} className="text-primary" /></button>
              <button onClick={() => handleDelete(s.id)} className="p-1.5 hover:bg-white rounded-lg transition-colors"><Trash2 size={14} className="text-red-500" /></button>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <Modal title={editing ? 'Edit Syllabus' : 'Add Syllabus'} onClose={() => setShowModal(false)}>
          <InputField label="Year" value={form.year} onChange={v => setForm({...form, year: v})} placeholder="e.g. FY, SY, MSC-I" />
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
            <select value={form.level} onChange={e => setForm({...form, level: e.target.value})} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
              <option value="UG">UG</option>
              <option value="PG">PG</option>
            </select>
          </div>
          <InputField label="Semester" value={form.semester} onChange={v => setForm({...form, semester: v})} placeholder="e.g. S1, S2" />
          <InputField label="Syllabus URL" value={form.syllabusUrl} onChange={v => setForm({...form, syllabusUrl: v})} placeholder="Link to syllabus PDF" />
          <InputField label="PYQ URL" value={form.pyqUrl} onChange={v => setForm({...form, pyqUrl: v})} placeholder="Link to PYQ PDF" />
          <button onClick={handleSave} className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors">
            <Save size={16} /> {editing ? 'Update' : 'Add'} Syllabus
          </button>
        </Modal>
      )}
    </div>
  );
}

// ─── Topper Manager ────────────────────────────────
function TopperManager({ data, updateData }) {
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', year: '', cgpa: '', imageUrl: '', program: '' });

  const openAdd = () => { setEditing(null); setForm({ name: '', year: '', cgpa: '', imageUrl: '', program: '' }); setShowModal(true); };
  const openEdit = (item) => { setEditing(item); setForm({ ...item }); setShowModal(true); };

  const handleSave = () => {
    alert('MySQL saving for Toppers not yet implemented');
    setShowModal(false);
  };

  const handleDelete = (id) => {
    alert('MySQL delete for Toppers not yet implemented');
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-navy">Toppers ({data.toppers.length})</h3>
        <button onClick={openAdd} className="flex items-center gap-1 px-3 py-1.5 bg-primary text-white text-sm rounded-lg hover:bg-primary-hover transition-colors">
          <Plus size={14} /> Add
        </button>
      </div>
      <div className="space-y-2">
        {data.toppers.map(t => (
          <div key={t.id} className="flex items-center justify-between p-3 bg-section-bg rounded-lg">
            <div>
              <p className="font-medium text-navy text-sm">{t.name}</p>
              <p className="text-xs text-gray-500">{t.program} • {t.year} • CGPA: {t.cgpa}</p>
            </div>
            <div className="flex gap-1">
              <button onClick={() => openEdit(t)} className="p-1.5 hover:bg-white rounded-lg transition-colors"><Pencil size={14} className="text-primary" /></button>
              <button onClick={() => handleDelete(t.id)} className="p-1.5 hover:bg-white rounded-lg transition-colors"><Trash2 size={14} className="text-red-500" /></button>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <Modal title={editing ? 'Edit Topper' : 'Add Topper'} onClose={() => setShowModal(false)}>
          <InputField label="Name" value={form.name} onChange={v => setForm({...form, name: v})} placeholder="Student name" />
          <InputField label="Program" value={form.program} onChange={v => setForm({...form, program: v})} placeholder="e.g. BCS, MCS" />
          <InputField label="Year" value={form.year} onChange={v => setForm({...form, year: v})} placeholder="e.g. 2025" />
          <InputField label="CGPA" value={form.cgpa} onChange={v => setForm({...form, cgpa: v})} placeholder="e.g. 9.8" />
          <InputField label="Image URL" value={form.imageUrl} onChange={v => setForm({...form, imageUrl: v})} placeholder="Optional image URL" />
          <button onClick={handleSave} className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors">
            <Save size={16} /> {editing ? 'Update' : 'Add'} Topper
          </button>
        </Modal>
      )}
    </div>
  );
}

// ─── Placement Manager ────────────────────────────────
function PlacementManager({ data, updateData }) {
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', company: '', package: '', imageUrl: '', year: '' });

  const openAdd = () => { setEditing(null); setForm({ name: '', company: '', package: '', imageUrl: '', year: '' }); setShowModal(true); };
  const openEdit = (item) => { setEditing(item); setForm({ ...item }); setShowModal(true); };

  const handleSave = () => {
    alert('MySQL saving for Placements not yet implemented');
    setShowModal(false);
  };

  const handleDelete = (id) => {
    alert('MySQL delete for Placements not yet implemented');
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-navy">Placements ({data.placements.length})</h3>
        <button onClick={openAdd} className="flex items-center gap-1 px-3 py-1.5 bg-primary text-white text-sm rounded-lg hover:bg-primary-hover transition-colors">
          <Plus size={14} /> Add
        </button>
      </div>
      <div className="space-y-2">
        {data.placements.map(p => (
          <div key={p.id} className="flex items-center justify-between p-3 bg-section-bg rounded-lg">
            <div>
              <p className="font-medium text-navy text-sm">{p.name}</p>
              <p className="text-xs text-gray-500">{p.company} • {p.package}</p>
            </div>
            <div className="flex gap-1">
              <button onClick={() => openEdit(p)} className="p-1.5 hover:bg-white rounded-lg transition-colors"><Pencil size={14} className="text-primary" /></button>
              <button onClick={() => handleDelete(p.id)} className="p-1.5 hover:bg-white rounded-lg transition-colors"><Trash2 size={14} className="text-red-500" /></button>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <Modal title={editing ? 'Edit Placement' : 'Add Placement'} onClose={() => setShowModal(false)}>
          <InputField label="Name" value={form.name} onChange={v => setForm({...form, name: v})} placeholder="Student name" />
          <InputField label="Company" value={form.company} onChange={v => setForm({...form, company: v})} placeholder="Company name" />
          <InputField label="Package" value={form.package} onChange={v => setForm({...form, package: v})} placeholder="e.g. 4.5 LPA" />
          <InputField label="Year" value={form.year} onChange={v => setForm({...form, year: v})} placeholder="e.g. 2025" />
          <InputField label="Image URL" value={form.imageUrl} onChange={v => setForm({...form, imageUrl: v})} placeholder="Optional image URL" />
          <button onClick={handleSave} className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors">
            <Save size={16} /> {editing ? 'Update' : 'Add'} Placement
          </button>
        </Modal>
      )}
    </div>
  );
}

// ─── Notice Manager ────────────────────────────────
function NoticeManager({ data, addNotice, updateNotice, deleteNotice }) {
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', date: '', content: '' });

  const openAdd = () => { setEditing(null); setForm({ title: '', date: new Date().toISOString().split('T')[0], content: '' }); setShowModal(true); };
  const openEdit = (item) => { setEditing(item); setForm({ ...item, date: item.date.split('T')[0] }); setShowModal(true); };

  const handleSave = async () => {
    if (editing) {
      await updateNotice(editing.id, form);
    } else {
      await addNotice(form);
    }
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this notice?')) {
      await deleteNotice(id);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-navy">Notices ({data.notices.length})</h3>
        <button onClick={openAdd} className="flex items-center gap-1 px-3 py-1.5 bg-primary text-white text-sm rounded-lg hover:bg-primary-hover transition-colors">
          <Plus size={14} /> Add
        </button>
      </div>
      <div className="space-y-2">
        {data.notices.map(n => (
          <div key={n.id} className="flex items-center justify-between p-3 bg-section-bg rounded-lg">
            <div>
              <p className="font-medium text-navy text-sm">{n.title}</p>
              <p className="text-xs text-gray-500">{n.date.split('T')[0]} — {n.content}</p>
            </div>
            <div className="flex gap-1">
              <button onClick={() => openEdit(n)} className="p-1.5 hover:bg-white rounded-lg transition-colors"><Pencil size={14} className="text-primary" /></button>
              <button onClick={() => handleDelete(n.id)} className="p-1.5 hover:bg-white rounded-lg transition-colors"><Trash2 size={14} className="text-red-500" /></button>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <Modal title={editing ? 'Edit Notice' : 'Add Notice'} onClose={() => setShowModal(false)}>
          <InputField label="Title" value={form.title} onChange={v => setForm({...form, title: v})} placeholder="Notice title" />
          <InputField label="Date" value={form.date} onChange={v => setForm({...form, date: v})} type="date" />
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <textarea
              value={form.content}
              onChange={e => setForm({...form, content: e.target.value})}
              rows={3}
              placeholder="Notice content"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          <button onClick={handleSave} className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors">
            <Save size={16} /> {editing ? 'Update' : 'Add'} Notice
          </button>
        </Modal>
      )}
    </div>
  );
}

// ─── Events Manager ────────────────────────────────
function EventsManager({ data, updateNestedData }) {
  const categories = ['alumni', 'extraCurricular', 'conferences', 'cultural', 'awards', 'social'];
  const [activeCategory, setActiveCategory] = useState('conferences');
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', date: '', description: '', imageUrl: '', recipient: '' });

  const events = data.events[activeCategory] || [];

  const openAdd = () => { setEditing(null); setForm({ title: '', date: '', description: '', imageUrl: '', recipient: '' }); setShowModal(true); };
  const openEdit = (item) => { setEditing(item); setForm({ ...item }); setShowModal(true); };

  const handleSave = () => {
    alert('MySQL saving for Events not yet implemented');
    setShowModal(false);
  };

  const handleDelete = (id) => {
    alert('MySQL delete for Events not yet implemented');
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-navy">Events</h3>
        <button onClick={openAdd} className="flex items-center gap-1 px-3 py-1.5 bg-primary text-white text-sm rounded-lg hover:bg-primary-hover transition-colors">
          <Plus size={14} /> Add
        </button>
      </div>
      <div className="flex flex-wrap gap-1 mb-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
              activeCategory === cat ? 'bg-primary text-white' : 'bg-section-bg text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="space-y-2">
        {events.map(e => (
          <div key={e.id} className="flex items-center justify-between p-3 bg-section-bg rounded-lg">
            <div>
              <p className="font-medium text-navy text-sm">{e.title}</p>
              <p className="text-xs text-gray-500">{e.date}</p>
            </div>
            <div className="flex gap-1">
              <button onClick={() => openEdit(e)} className="p-1.5 hover:bg-white rounded-lg transition-colors"><Pencil size={14} className="text-primary" /></button>
              <button onClick={() => handleDelete(e.id)} className="p-1.5 hover:bg-white rounded-lg transition-colors"><Trash2 size={14} className="text-red-500" /></button>
            </div>
          </div>
        ))}
        {events.length === 0 && (
          <p className="text-sm text-gray-500 text-center py-4">No events in this category.</p>
        )}
      </div>
      {showModal && (
        <Modal title={editing ? 'Edit Event' : 'Add Event'} onClose={() => setShowModal(false)}>
          <InputField label="Title" value={form.title} onChange={v => setForm({...form, title: v})} placeholder="Event title" />
          <InputField label="Date" value={form.date} onChange={v => setForm({...form, date: v})} type="date" />
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={form.description}
              onChange={e => setForm({...form, description: e.target.value})}
              rows={3}
              placeholder="Event description"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
          {activeCategory === 'awards' && (
            <InputField label="Recipient" value={form.recipient} onChange={v => setForm({...form, recipient: v})} placeholder="Award recipient" />
          )}
          <InputField label="Image URL" value={form.imageUrl} onChange={v => setForm({...form, imageUrl: v})} placeholder="Optional image URL" />
          <button onClick={handleSave} className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors">
            <Save size={16} /> {editing ? 'Update' : 'Add'} Event
          </button>
        </Modal>
      )}
    </div>
  );
}

// ─── Main Dashboard ────────────────────────────────
export default function AdminDashboard() {
  const { isAuthenticated, logout } = useAuth();
  const { 
    data, 
    loading, 
    addNotice, 
    updateNotice, 
    deleteNotice, 
    addFaculty, 
    updateFaculty, 
    deleteFaculty, 
    addTimetable 
  } = useData();
  const [activeSection, setActiveSection] = useState('faculty');
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/admin');
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium text-sm">Loading MySQL Data...</p>
        </div>
      </div>
    );
  }

  const renderManager = () => {
    switch (activeSection) {
      case 'faculty': 
        return <FacultyManager 
          data={data} 
          addFaculty={addFaculty} 
          updateFaculty={updateFaculty} 
          deleteFaculty={deleteFaculty} 
        />;
      case 'timetable': 
        return <TimetableManager 
          data={data} 
          addTimetable={addTimetable} 
        />;
      case 'syllabus': return <SyllabusManager data={data} />;
      case 'toppers': return <TopperManager data={data} />;
      case 'placements': return <PlacementManager data={data} />;
      case 'events': return <EventsManager data={data} />;
      case 'notices': 
        return <NoticeManager 
          data={data} 
          addNotice={addNotice} 
          updateNotice={updateNotice} 
          deleteNotice={deleteNotice} 
        />;
      default: return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-navy">Admin Dashboard</h1>
          <p className="text-sm text-gray-500">Manage your website content</p>
        </div>
        <button
          onClick={() => { logout(); navigate('/admin'); }}
          className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 font-medium text-sm rounded-lg hover:bg-red-100 transition-colors"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

      <div className="grid lg:grid-cols-[260px_1fr] gap-6">
        {/* Sidebar */}
        <div className="bg-white rounded-xl border border-gray-100 p-3 h-fit lg:sticky lg:top-[140px]">
          {sections.map(s => {
            const Icon = s.icon;
            return (
              <button
                key={s.key}
                onClick={() => setActiveSection(s.key)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-all mb-1 ${
                  activeSection === s.key
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'text-gray-600 hover:bg-section-bg'
                }`}
              >
                <Icon size={16} />
                {s.label}
                {activeSection === s.key && <ChevronRight size={14} className="ml-auto" />}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          {renderManager()}
        </div>
      </div>
    </div>
  );
}
