// ============================================================
//  FUNSTORE Library Management System — Data Layer
//  All data is stored in localStorage
// ============================================================

const FS = {
  roles: 'fs_roles', users: 'fs_users', books: 'fs_books',
  students: 'fs_students', members: 'fs_members',
  issues: 'fs_issues', session: 'fs_session'
};

// ---------- SEED DATA ----------

const SEED_ROLES = [
  { id: 'r1', name: 'Administrator', description: 'Full system access — manage all modules' },
  { id: 'r2', name: 'Manager', description: 'Manage books, students, members and issues' },
  { id: 'r3', name: 'Librarian', description: 'Issue and return books only' }
];

const SEED_USERS = [
  { id: 'u1', name: 'Dnyaneshwari', email: 'dnyaneshwari@funstore.com', mobile: '9876543210', roleId: 'r1', username: 'dnyaneshwari', password: 'admin123', joinDate: '2024-01-01' },
  { id: 'u2', name: 'Rajesh Kumar', email: 'rajesh@funstore.com', mobile: '9876543211', roleId: 'r2', username: 'manager', password: 'manager123', joinDate: '2024-02-15' },
  { id: 'u3', name: 'Priya Nair', email: 'priya@funstore.com', mobile: '9876543212', roleId: 'r3', username: 'librarian', password: 'lib123', joinDate: '2024-03-10' }
];

const SEED_STUDENTS = [
  { id: 'st1',  rollNo: 'BSC001', name: 'Priya Sharma',       email: 'priya.sharma@student.edu',       mobile: '9001001001', year: 'FY BSc CS', address: '12 Shivaji Nagar, Mumbai, Maharashtra' },
  { id: 'st2',  rollNo: 'BSC002', name: 'Rahul Patel',        email: 'rahul.patel@student.edu',        mobile: '9001001002', year: 'FY BSc CS', address: '45 Gandhi Road, Ahmedabad, Gujarat' },
  { id: 'st3',  rollNo: 'BSC003', name: 'Ananya Iyer',        email: 'ananya.iyer@student.edu',        mobile: '9001001003', year: 'SY BSc CS', address: '7 T Nagar, Chennai, Tamil Nadu' },
  { id: 'st4',  rollNo: 'BSC004', name: 'Arjun Singh',        email: 'arjun.singh@student.edu',        mobile: '9001001004', year: 'SY BSc CS', address: '23 Sector 15, Noida, Uttar Pradesh' },
  { id: 'st5',  rollNo: 'BSC005', name: 'Sneha Desai',        email: 'sneha.desai@student.edu',        mobile: '9001001005', year: 'TY BSc CS', address: '67 FC Road, Pune, Maharashtra' },
  { id: 'st6',  rollNo: 'BSC006', name: 'Vikram Kumar',       email: 'vikram.kumar@student.edu',       mobile: '9001001006', year: 'FY BSc CS', address: '89 MG Road, Bangalore, Karnataka' },
  { id: 'st7',  rollNo: 'BSC007', name: 'Pooja Nair',         email: 'pooja.nair@student.edu',         mobile: '9001001007', year: 'TY BSc CS', address: '34 Marine Drive, Kochi, Kerala' },
  { id: 'st8',  rollNo: 'BSC008', name: 'Aditya Joshi',       email: 'aditya.joshi@student.edu',       mobile: '9001001008', year: 'SY BSc CS', address: '11 Tilak Road, Nashik, Maharashtra' },
  { id: 'st9',  rollNo: 'BSC009', name: 'Kavya Reddy',        email: 'kavya.reddy@student.edu',        mobile: '9001001009', year: 'TY BSc CS', address: '56 Banjara Hills, Hyderabad, Telangana' },
  { id: 'st10', rollNo: 'BSC010', name: 'Rohit Mehta',        email: 'rohit.mehta@student.edu',        mobile: '9001001010', year: 'FY BSc CS', address: '78 Salt Lake, Kolkata, West Bengal' },
  { id: 'st11', rollNo: 'BSC011', name: 'Divya Pillai',       email: 'divya.pillai@student.edu',       mobile: '9001001011', year: 'SY BSc CS', address: '90 Vazhuthacaud, Thiruvananthapuram, Kerala' },
  { id: 'st12', rollNo: 'BSC012', name: 'Sanjay Gupta',       email: 'sanjay.gupta@student.edu',       mobile: '9001001012', year: 'TY BSc CS', address: '15 Civil Lines, Allahabad, Uttar Pradesh' },
  { id: 'st13', rollNo: 'BSC013', name: 'Meera Krishnan',     email: 'meera.krishnan@student.edu',     mobile: '9001001013', year: 'FY BSc CS', address: '28 RS Puram, Coimbatore, Tamil Nadu' },
  { id: 'st14', rollNo: 'BSC014', name: 'Akash Verma',        email: 'akash.verma@student.edu',        mobile: '9001001014', year: 'SY BSc CS', address: '44 Nehru Place, New Delhi' },
  { id: 'st15', rollNo: 'BSC015', name: 'Shreya Mishra',      email: 'shreya.mishra@student.edu',      mobile: '9001001015', year: 'TY BSc CS', address: '62 Hazratganj, Lucknow, Uttar Pradesh' },
  { id: 'st16', rollNo: 'BSC016', name: 'Nikhil Rao',         email: 'nikhil.rao@student.edu',         mobile: '9001001016', year: 'FY BSc CS', address: '83 Koramangala, Bangalore, Karnataka' },
  { id: 'st17', rollNo: 'BSC017', name: 'Anjali Shah',        email: 'anjali.shah@student.edu',        mobile: '9001001017', year: 'SY BSc CS', address: '19 Navrangpura, Ahmedabad, Gujarat' },
  { id: 'st18', rollNo: 'BSC018', name: 'Deepak Tiwari',      email: 'deepak.tiwari@student.edu',      mobile: '9001001018', year: 'TY BSc CS', address: '37 Kashi Colony, Varanasi, Uttar Pradesh' },
  { id: 'st19', rollNo: 'BSC019', name: 'Riya Pandey',        email: 'riya.pandey@student.edu',        mobile: '9001001019', year: 'FY BSc CS', address: '55 Rajpur Road, Dehradun, Uttarakhand' },
  { id: 'st20', rollNo: 'BSC020', name: 'Kartik Bajaj',       email: 'kartik.bajaj@student.edu',       mobile: '9001001020', year: 'SY BSc CS', address: '71 Sadar Bazaar, Agra, Uttar Pradesh' },
  { id: 'st21', rollNo: 'BSC021', name: 'Swati Bhatt',        email: 'swati.bhatt@student.edu',        mobile: '9001001021', year: 'TY BSc CS', address: '88 Mahalaxmi, Mumbai, Maharashtra' },
  { id: 'st22', rollNo: 'BSC022', name: 'Manish Agarwal',     email: 'manish.agarwal@student.edu',     mobile: '9001001022', year: 'FY BSc CS', address: '14 Station Road, Jaipur, Rajasthan' },
  { id: 'st23', rollNo: 'BSC023', name: 'Nisha Saxena',       email: 'nisha.saxena@student.edu',       mobile: '9001001023', year: 'SY BSc CS', address: '32 Kidwai Nagar, Kanpur, Uttar Pradesh' },
  { id: 'st24', rollNo: 'BSC024', name: 'Varun Chauhan',      email: 'varun.chauhan@student.edu',      mobile: '9001001024', year: 'TY BSc CS', address: '50 Sector 22, Chandigarh' },
  { id: 'st25', rollNo: 'BSC025', name: 'Priyanka Yadav',     email: 'priyanka.yadav@student.edu',     mobile: '9001001025', year: 'FY BSc CS', address: '68 Arera Colony, Bhopal, Madhya Pradesh' },
  { id: 'st26', rollNo: 'BSC026', name: 'Siddharth Jain',     email: 'siddharth.jain@student.edu',     mobile: '9001001026', year: 'SY BSc CS', address: '86 Palasia, Indore, Madhya Pradesh' },
  { id: 'st27', rollNo: 'BSC027', name: 'Kritika Malhotra',   email: 'kritika.malhotra@student.edu',   mobile: '9001001027', year: 'TY BSc CS', address: '22 Model Town, Ludhiana, Punjab' },
  { id: 'st28', rollNo: 'BSC028', name: 'Amitabh Dubey',      email: 'amitabh.dubey@student.edu',      mobile: '9001001028', year: 'FY BSc CS', address: '48 Raj Bhavan Road, Patna, Bihar' },
  { id: 'st29', rollNo: 'BSC029', name: 'Neha Tripathi',      email: 'neha.tripathi@student.edu',      mobile: '9001001029', year: 'SY BSc CS', address: '66 Vrindavan Colony, Mathura, Uttar Pradesh' },
  { id: 'st30', rollNo: 'BSC030', name: 'Gaurav Shukla',      email: 'gaurav.shukla@student.edu',      mobile: '9001001030', year: 'TY BSc CS', address: '84 Raipur Colony, Raipur, Chhattisgarh' },
  { id: 'st31', rollNo: 'BSC031', name: 'Sakshi Garg',        email: 'sakshi.garg@student.edu',        mobile: '9001001031', year: 'FY BSc CS', address: '13 Kalkaji, New Delhi' },
  { id: 'st32', rollNo: 'BSC032', name: 'Pratik Soni',        email: 'pratik.soni@student.edu',        mobile: '9001001032', year: 'SY BSc CS', address: '31 Andheri West, Mumbai, Maharashtra' },
  { id: 'st33', rollNo: 'BSC033', name: 'Muskan Kapoor',      email: 'muskan.kapoor@student.edu',      mobile: '9001001033', year: 'TY BSc CS', address: '49 Jayanagar, Bangalore, Karnataka' },
  { id: 'st34', rollNo: 'BSC034', name: 'Rajesh Bose',        email: 'rajesh.bose@student.edu',        mobile: '9001001034', year: 'FY BSc CS', address: '67 Howrah, Kolkata, West Bengal' },
  { id: 'st35', rollNo: 'BSC035', name: 'Tanvi Kulkarni',     email: 'tanvi.kulkarni@student.edu',     mobile: '9001001035', year: 'SY BSc CS', address: '85 Kothrud, Pune, Maharashtra' },
  { id: 'st36', rollNo: 'BSC036', name: 'Abhinav Chaudhary',  email: 'abhinav.chaudhary@student.edu',  mobile: '9001001036', year: 'TY BSc CS', address: '21 Rajouri Garden, New Delhi' },
  { id: 'st37', rollNo: 'BSC037', name: 'Rekha Nayak',        email: 'rekha.nayak@student.edu',        mobile: '9001001037', year: 'FY BSc CS', address: '39 Cuttack Road, Bhubaneswar, Odisha' },
  { id: 'st38', rollNo: 'BSC038', name: 'Suresh Misra',       email: 'suresh.misra@student.edu',       mobile: '9001001038', year: 'SY BSc CS', address: '57 Lanka, Varanasi, Uttar Pradesh' },
  { id: 'st39', rollNo: 'BSC039', name: 'Pallavi Banerjee',   email: 'pallavi.banerjee@student.edu',   mobile: '9001001039', year: 'TY BSc CS', address: '75 Ballygunge, Kolkata, West Bengal' },
  { id: 'st40', rollNo: 'BSC040', name: 'Kiran Deshpande',    email: 'kiran.deshpande@student.edu',    mobile: '9001001040', year: 'FY BSc CS', address: '93 Shivajinagar, Pune, Maharashtra' },
  { id: 'st41', rollNo: 'BSC041', name: 'Yash Ghosh',         email: 'yash.ghosh@student.edu',         mobile: '9001001041', year: 'SY BSc CS', address: '18 Jadavpur, Kolkata, West Bengal' },
  { id: 'st42', rollNo: 'BSC042', name: 'Ritu Chatterjee',    email: 'ritu.chatterjee@student.edu',    mobile: '9001001042', year: 'TY BSc CS', address: '36 Kasba, Kolkata, West Bengal' },
  { id: 'st43', rollNo: 'BSC043', name: 'Vijay Menon',        email: 'vijay.menon@student.edu',        mobile: '9001001043', year: 'FY BSc CS', address: '54 Pattom, Thiruvananthapuram, Kerala' },
  { id: 'st44', rollNo: 'BSC044', name: 'Sandhya Pillai',     email: 'sandhya.pillai@student.edu',     mobile: '9001001044', year: 'SY BSc CS', address: '72 Kakkanad, Kochi, Kerala' },
  { id: 'st45', rollNo: 'BSC045', name: 'Sumit Goswami',      email: 'sumit.goswami@student.edu',      mobile: '9001001045', year: 'TY BSc CS', address: '90 Dispur, Guwahati, Assam' },
  { id: 'st46', rollNo: 'BSC046', name: 'Monika Rawat',       email: 'monika.rawat@student.edu',       mobile: '9001001046', year: 'FY BSc CS', address: '17 Haridwar Road, Rishikesh, Uttarakhand' },
  { id: 'st47', rollNo: 'BSC047', name: 'Harish Yadav',       email: 'harish.yadav@student.edu',       mobile: '9001001047', year: 'SY BSc CS', address: '35 Sector 12, Faridabad, Haryana' },
  { id: 'st48', rollNo: 'BSC048', name: 'Disha Patil',        email: 'disha.patil@student.edu',        mobile: '9001001048', year: 'TY BSc CS', address: '53 Hadapsar, Pune, Maharashtra' },
  { id: 'st49', rollNo: 'BSC049', name: 'Naveen Dubey',       email: 'naveen.dubey@student.edu',       mobile: '9001001049', year: 'FY BSc CS', address: '71 Prayagraj Colony, Allahabad, Uttar Pradesh' },
  { id: 'st50', rollNo: 'BSC050', name: 'Smita Raghavan',     email: 'smita.raghavan@student.edu',     mobile: '9001001050', year: 'SY BSc CS', address: '89 Velachery, Chennai, Tamil Nadu' }
];

const SEED_BOOKS = [
  // Programming Languages
  { id: 'bk1',  name: 'Programming in C',                              author: 'Dennis Ritchie',                    category: 'Programming',          isbn: '978-0131101630', copies: 5,  available: 4, description: 'The original C programming reference by the creator of C.' },
  { id: 'bk2',  name: 'Let Us C',                                      author: 'Yashavant Kanetkar',                category: 'Programming',          isbn: '978-8183331630', copies: 8,  available: 7, description: 'One of the most popular C programming books in India.' },
  { id: 'bk3',  name: 'C Programming Language',                        author: 'Kernighan & Ritchie',               category: 'Programming',          isbn: '978-0131103627', copies: 6,  available: 6, description: 'The definitive C programming book, known as K&R.' },
  { id: 'bk4',  name: 'C++ Primer',                                    author: 'Stanley Lippman',                   category: 'Programming',          isbn: '978-0321714114', copies: 4,  available: 4, description: 'Comprehensive introduction to the C++ programming language.' },
  { id: 'bk5',  name: 'Object Oriented Programming in C++',            author: 'Robert Lafore',                     category: 'Programming',          isbn: '978-0672323089', copies: 5,  available: 5, description: 'Classic OOP concepts explained through C++ examples.' },
  { id: 'bk6',  name: 'Core Java Volume I',                            author: 'Cay Horstmann',                     category: 'Programming',          isbn: '978-0137081899', copies: 6,  available: 6, description: 'Fundamentals of Java programming with detailed examples.' },
  { id: 'bk7',  name: 'Head First Java',                               author: 'Kathy Sierra & Bert Bates',         category: 'Programming',          isbn: '978-0596009205', copies: 5,  available: 4, description: 'A learner-friendly introduction to Java with visual approach.' },
  { id: 'bk8',  name: 'Effective Java',                                author: 'Joshua Bloch',                      category: 'Programming',          isbn: '978-0134685991', copies: 3,  available: 3, description: 'Best practices for the Java platform from an expert.' },
  { id: 'bk9',  name: 'Python Programming',                            author: 'John Zelle',                        category: 'Programming',          isbn: '978-1887902991', copies: 7,  available: 7, description: 'Introduction to computer science using Python.' },
  { id: 'bk10', name: 'Python Crash Course',                           author: 'Eric Matthes',                      category: 'Programming',          isbn: '978-1593279288', copies: 6,  available: 5, description: 'A hands-on, project-based introduction to Python.' },
  { id: 'bk11', name: 'Automate the Boring Stuff with Python',         author: 'Al Sweigart',                       category: 'Programming',          isbn: '978-1593275990', copies: 4,  available: 4, description: 'Practical Python programming for total beginners.' },
  { id: 'bk12', name: 'Learn Python the Hard Way',                     author: 'Zed Shaw',                          category: 'Programming',          isbn: '978-0321884916', copies: 3,  available: 3, description: 'A straightforward drill-based approach to learning Python.' },
  { id: 'bk13', name: 'JavaScript: The Definitive Guide',              author: 'David Flanagan',                    category: 'Programming',          isbn: '978-1491952023', copies: 4,  available: 4, description: 'Comprehensive reference to JavaScript and its ecosystem.' },
  { id: 'bk14', name: 'Eloquent JavaScript',                           author: 'Marijn Haverbeke',                  category: 'Programming',          isbn: '978-1593279509', copies: 3,  available: 3, description: 'A modern introduction to programming and JavaScript.' },
  { id: 'bk15', name: 'The Go Programming Language',                   author: 'Donovan & Kernighan',               category: 'Programming',          isbn: '978-0134190440', copies: 3,  available: 3, description: 'The authoritative guide to Go programming language.' },
  { id: 'bk16', name: 'Introduction to Java Programming',              author: 'Y. Daniel Liang',                   category: 'Programming',          isbn: '978-0132936521', copies: 5,  available: 5, description: 'Comprehensive Java textbook widely used in universities.' },
  { id: 'bk17', name: 'C++ How to Program',                            author: 'Deitel & Deitel',                   category: 'Programming',          isbn: '978-0133378719', copies: 4,  available: 4, description: 'A comprehensive guide to C++ programming.' },
  { id: 'bk18', name: 'PHP and MySQL Web Development',                 author: 'Luke Welling',                      category: 'Programming',          isbn: '978-0321833891', copies: 3,  available: 3, description: 'Practical guide to building web apps with PHP and MySQL.' },
  { id: 'bk19', name: 'Beginning C++ Programming',                     author: 'Ivor Horton',                       category: 'Programming',          isbn: '978-1119092223', copies: 3,  available: 3, description: 'Introduction to C++ for absolute beginners.' },
  { id: 'bk20', name: 'Ruby on Rails Tutorial',                        author: 'Michael Hartl',                     category: 'Programming',          isbn: '978-0321928283', copies: 2,  available: 2, description: 'Learn web development with the Rails framework.' },

  // Data Structures & Algorithms
  { id: 'bk21', name: 'Data Structures using C',                       author: 'Aaron Tenenbaum',                   category: 'Data Structures',      isbn: '978-0131997462', copies: 7,  available: 6, description: 'Classic reference for data structures in C programming.' },
  { id: 'bk22', name: 'Introduction to Algorithms (CLRS)',             author: 'Cormen, Leiserson, Rivest & Stein', category: 'Data Structures',      isbn: '978-0262033848', copies: 6,  available: 4, description: 'The Bible of algorithms — comprehensive algorithms reference.' },
  { id: 'bk23', name: 'Data Structures — Seymour Lipschutz',           author: 'Seymour Lipschutz',                 category: 'Data Structures',      isbn: '978-0070601703', copies: 8,  available: 7, description: 'Popular data structures book used in Indian universities.' },
  { id: 'bk24', name: 'Algorithms',                                    author: 'Robert Sedgewick & Kevin Wayne',    category: 'Data Structures',      isbn: '978-0321573513', copies: 5,  available: 5, description: 'Comprehensive treatment of algorithms with Java implementations.' },
  { id: 'bk25', name: 'Algorithm Design',                              author: 'Kleinberg & Tardos',                category: 'Data Structures',      isbn: '978-0321295354', copies: 4,  available: 3, description: 'Design and analysis of algorithms with real-world applications.' },
  { id: 'bk26', name: 'The Algorithm Design Manual',                   author: 'Steven Skiena',                     category: 'Data Structures',      isbn: '978-1848000698', copies: 3,  available: 3, description: 'Practical approach to algorithm design with problem catalog.' },
  { id: 'bk27', name: 'Data Structures using C++',                     author: 'D.S. Malik',                        category: 'Data Structures',      isbn: '978-1285187501', copies: 5,  available: 5, description: 'Comprehensive data structures book using C++.' },
  { id: 'bk28', name: 'Fundamentals of Data Structures',               author: 'Horowitz & Sahni',                  category: 'Data Structures',      isbn: '978-0716782506', copies: 5,  available: 5, description: 'Foundational text on data structures, widely used in India.' },
  { id: 'bk29', name: 'Data Structures & Algorithm Analysis in C',     author: 'Mark Weiss',                        category: 'Data Structures',      isbn: '978-0201498400', copies: 4,  available: 4, description: 'Analysis of data structures with theoretical complexity.' },
  { id: 'bk30', name: 'Grokking Algorithms',                           author: 'Aditya Bhargava',                   category: 'Data Structures',      isbn: '978-1617292231', copies: 4,  available: 4, description: 'Illustrated guide to algorithms for programmers.' },
  { id: 'bk31', name: 'Competitive Programming 3',                     author: 'Steven Halim',                      category: 'Data Structures',      isbn: '978-9810919900', copies: 3,  available: 3, description: 'Essential guide for competitive programming competitions.' },
  { id: 'bk32', name: 'Advanced Data Structures',                      author: 'Peter Brass',                       category: 'Data Structures',      isbn: '978-0521880374', copies: 2,  available: 2, description: 'Advanced topics in data structures for graduate students.' },
  { id: 'bk33', name: 'Algorithms Unlocked',                           author: 'Thomas Cormen',                     category: 'Data Structures',      isbn: '978-0262518802', copies: 3,  available: 3, description: 'Gentle introduction to algorithms by the CLRS co-author.' },
  { id: 'bk34', name: 'Programming Pearls',                            author: 'Jon Bentley',                       category: 'Data Structures',      isbn: '978-0201657883', copies: 3,  available: 3, description: 'Classic problems and elegant solutions from programming.' },
  { id: 'bk35', name: 'Data Structures: A Pseudocode Approach',        author: 'Gilberg & Forouzan',                category: 'Data Structures',      isbn: '978-0534390808', copies: 4,  available: 4, description: 'Data structures explained using pseudocode for clarity.' },

  // Database Management
  { id: 'bk36', name: 'Database System Concepts',                      author: 'Silberschatz, Korth & Sudarshan',   category: 'Database',             isbn: '978-0073523323', copies: 7,  available: 6, description: 'Standard database textbook used in universities worldwide.' },
  { id: 'bk37', name: 'Fundamentals of Database Systems',              author: 'Elmasri & Navathe',                 category: 'Database',             isbn: '978-0136086209', copies: 6,  available: 5, description: 'Comprehensive database systems with real-world examples.' },
  { id: 'bk38', name: 'Database Management Systems',                   author: 'Ramakrishnan & Gehrke',             category: 'Database',             isbn: '978-0072465631', copies: 5,  available: 5, description: 'In-depth coverage of database management with SQL.' },
  { id: 'bk39', name: 'SQL: The Complete Reference',                   author: 'James Groff',                       category: 'Database',             isbn: '978-0071592550', copies: 4,  available: 4, description: 'Complete guide to SQL language and database concepts.' },
  { id: 'bk40', name: 'Learning SQL',                                  author: 'Alan Beaulieu',                     category: 'Database',             isbn: '978-0596520830', copies: 5,  available: 5, description: 'A beginner-friendly introduction to SQL programming.' },
  { id: 'bk41', name: 'MySQL Cookbook',                                author: 'Paul DuBois',                       category: 'Database',             isbn: '978-1449374235', copies: 3,  available: 3, description: 'Practical solutions to MySQL programming problems.' },
  { id: 'bk42', name: 'NoSQL Distilled',                               author: 'Fowler & Sadalage',                 category: 'Database',             isbn: '978-0321826626', copies: 3,  available: 2, description: 'Introduction to NoSQL databases and their use cases.' },
  { id: 'bk43', name: 'MongoDB: The Definitive Guide',                 author: 'Kristina Chodorow',                 category: 'Database',             isbn: '978-1491954461', copies: 3,  available: 3, description: 'Comprehensive guide to the MongoDB document database.' },

  // Operating Systems
  { id: 'bk44', name: 'Operating System Concepts',                     author: 'Silberschatz & Galvin',             category: 'Operating Systems',    isbn: '978-1118063330', copies: 7,  available: 5, description: 'The Dinosaur Book — standard OS textbook for universities.' },
  { id: 'bk45', name: 'Modern Operating Systems',                      author: 'Andrew Tanenbaum',                  category: 'Operating Systems',    isbn: '978-0136006633', copies: 6,  available: 6, description: 'Comprehensive guide to operating systems principles.' },
  { id: 'bk46', name: 'Operating Systems: Design and Implementation',  author: 'Tanenbaum & Woodhull',              category: 'Operating Systems',    isbn: '978-0131429383', copies: 4,  available: 4, description: 'OS design with implementation using MINIX.' },
  { id: 'bk47', name: 'Understanding the Linux Kernel',                author: 'Bovet & Cesati',                    category: 'Operating Systems',    isbn: '978-0596005658', copies: 3,  available: 3, description: 'In-depth look at the Linux kernel internals.' },
  { id: 'bk48', name: 'Operating Systems: Three Easy Pieces',          author: 'Arpaci-Dusseau',                    category: 'Operating Systems',    isbn: '978-1985086593', copies: 4,  available: 4, description: 'Virtualization, concurrency, and persistence explained.' },
  { id: 'bk49', name: 'Linux Kernel Development',                      author: 'Robert Love',                       category: 'Operating Systems',    isbn: '978-0672329463', copies: 3,  available: 3, description: 'Practical guide to the Linux kernel internals.' },
  { id: 'bk50', name: 'Advanced Programming in UNIX Environment',      author: 'W. Richard Stevens',                category: 'Operating Systems',    isbn: '978-0321637734', copies: 3,  available: 2, description: 'Definitive guide to Unix programming.' },

  // Computer Networks
  { id: 'bk51', name: 'Computer Networks',                             author: 'Andrew Tanenbaum',                  category: 'Networks',             isbn: '978-0132126953', copies: 7,  available: 6, description: 'Comprehensive textbook on computer networking principles.' },
  { id: 'bk52', name: 'Data Communications and Networking',            author: 'Behrouz Forouzan',                  category: 'Networks',             isbn: '978-0073376226', copies: 8,  available: 8, description: 'Standard networking textbook used in Indian universities.' },
  { id: 'bk53', name: 'Computer Networking: A Top-Down Approach',      author: 'Kurose & Ross',                     category: 'Networks',             isbn: '978-0132856201', copies: 6,  available: 5, description: 'Application-first approach to computer networking.' },
  { id: 'bk54', name: 'TCP/IP Illustrated Volume 1',                   author: 'W. Richard Stevens',                category: 'Networks',             isbn: '978-0201633467', copies: 4,  available: 4, description: 'Detailed exploration of the TCP/IP protocol suite.' },
  { id: 'bk55', name: 'Network Security Essentials',                   author: 'William Stallings',                  category: 'Networks',             isbn: '978-0133370430', copies: 4,  available: 4, description: 'Applications and standards in network security.' },
  { id: 'bk56', name: 'Wireless Communications',                       author: 'Andrea Goldsmith',                  category: 'Networks',             isbn: '978-0521837163', copies: 3,  available: 3, description: 'Fundamentals of wireless communication systems.' },
  { id: 'bk57', name: 'Computer Communication Networks',               author: 'Leon-Garcia & Widjaja',             category: 'Networks',             isbn: '978-0073376239', copies: 4,  available: 4, description: 'Principles and practice of computer communication networks.' },

  // Software Engineering
  { id: 'bk58', name: 'Software Engineering',                          author: 'Ian Sommerville',                   category: 'Software Engineering', isbn: '978-0133943030', copies: 7,  available: 6, description: 'Leading textbook on software engineering practices.' },
  { id: 'bk59', name: 'The Pragmatic Programmer',                      author: 'Hunt & Thomas',                     category: 'Software Engineering', isbn: '978-0135957059', copies: 5,  available: 5, description: 'Classic guide to software development best practices.' },
  { id: 'bk60', name: 'Clean Code',                                    author: 'Robert C. Martin',                  category: 'Software Engineering', isbn: '978-0132350884', copies: 5,  available: 4, description: 'Handbook of agile software craftsmanship.' },
  { id: 'bk61', name: 'Design Patterns — Gang of Four',                author: 'Gamma, Helm, Johnson & Vlissides',  category: 'Software Engineering', isbn: '978-0201633610', copies: 4,  available: 4, description: 'Elements of reusable object-oriented software patterns.' },
  { id: 'bk62', name: 'Software Engineering',                          author: 'Roger Pressman',                    category: 'Software Engineering', isbn: '978-0078022128', copies: 6,  available: 5, description: 'A practitioner-oriented approach to software engineering.' },
  { id: 'bk63', name: 'Code Complete',                                 author: 'Steve McConnell',                   category: 'Software Engineering', isbn: '978-0735619678', copies: 4,  available: 4, description: 'A practical handbook of software construction techniques.' },
  { id: 'bk64', name: 'Refactoring',                                   author: 'Martin Fowler',                     category: 'Software Engineering', isbn: '978-0134757599', copies: 3,  available: 3, description: 'Improving the design of existing code systematically.' },
  { id: 'bk65', name: 'The Mythical Man-Month',                        author: 'Frederick Brooks',                  category: 'Software Engineering', isbn: '978-0201835953', copies: 3,  available: 3, description: 'Classic essays on software engineering and project management.' },

  // Mathematics
  { id: 'bk66', name: 'Discrete Mathematics and Its Applications',     author: 'Kenneth Rosen',                     category: 'Mathematics',          isbn: '978-0073383095', copies: 8,  available: 7, description: 'Standard discrete math textbook for computer science.' },
  { id: 'bk67', name: 'Mathematical Structures for CS',                author: 'Judith Gersting',                   category: 'Mathematics',          isbn: '978-1429215060', copies: 5,  available: 5, description: 'Mathematical foundations of computer science.' },
  { id: 'bk68', name: 'Concrete Mathematics',                          author: 'Graham, Knuth & Patashnik',         category: 'Mathematics',          isbn: '978-0201558029', copies: 4,  available: 4, description: 'Foundation for computer science from Knuth himself.' },
  { id: 'bk69', name: 'Linear Algebra and Its Applications',           author: 'Gilbert Strang',                    category: 'Mathematics',          isbn: '978-0030105678', copies: 5,  available: 5, description: 'Accessible linear algebra for students and scientists.' },
  { id: 'bk70', name: 'Probability and Statistics for Engineers',      author: 'Walpole & Myers',                   category: 'Mathematics',          isbn: '978-0321629111', copies: 4,  available: 4, description: 'Probability and statistics for engineering students.' },
  { id: 'bk71', name: 'Numerical Methods for Scientists',              author: 'Chapra & Canale',                   category: 'Mathematics',          isbn: '978-0073401065', copies: 4,  available: 3, description: 'Numerical methods with emphasis on engineering applications.' },
  { id: 'bk72', name: 'Graph Theory',                                  author: 'Frank Harary',                      category: 'Mathematics',          isbn: '978-0201027877', copies: 3,  available: 3, description: 'Classic introduction to graph theory.' },
  { id: 'bk73', name: 'Discrete Mathematics',                          author: 'Susanna Epp',                       category: 'Mathematics',          isbn: '978-0495391326', copies: 4,  available: 4, description: 'Discrete math with strong focus on mathematical reasoning.' },

  // Computer Architecture
  { id: 'bk74', name: 'Computer Organization and Architecture',        author: 'William Stallings',                  category: 'Computer Architecture',isbn: '978-0133769999', copies: 6,  available: 5, description: 'Standard textbook on computer organization and architecture.' },
  { id: 'bk75', name: 'Digital Design',                                author: 'Morris Mano',                       category: 'Computer Architecture',isbn: '978-0132774208', copies: 7,  available: 7, description: 'Classic digital logic and computer design textbook.' },
  { id: 'bk76', name: 'Computer Organization',                         author: 'Hamacher, Vranesic & Zaky',         category: 'Computer Architecture',isbn: '978-0070494374', copies: 5,  available: 5, description: 'Comprehensive computer organization reference.' },
  { id: 'bk77', name: 'Computer Architecture: A Quantitative Approach', author: 'Patterson & Hennessy',              category: 'Computer Architecture',isbn: '978-0128119051', copies: 5,  available: 4, description: 'The definitive reference on computer architecture design.' },
  { id: 'bk78', name: 'Microprocessors and Microcontrollers',          author: 'N.S. Nise',                         category: 'Computer Architecture',isbn: '978-8120336025', copies: 5,  available: 4, description: '8085 and 8086 microprocessors with microcontrollers.' },
  { id: 'bk79', name: 'The Intel Microprocessors',                     author: 'Barry Brey',                        category: 'Computer Architecture',isbn: '978-0135026458', copies: 4,  available: 4, description: 'Intel microprocessors from 8086 through Pentium.' },
  { id: 'bk80', name: 'Digital Logic and Computer Design',             author: 'Morris Mano',                       category: 'Computer Architecture',isbn: '978-0130626691', copies: 5,  available: 5, description: 'Fundamentals of digital logic circuits and computer design.' },

  // Artificial Intelligence & ML
  { id: 'bk81', name: 'Artificial Intelligence: A Modern Approach',    author: 'Russell & Norvig',                  category: 'Artificial Intelligence', isbn: '978-0136042594', copies: 5, available: 4, description: 'The most comprehensive AI textbook available.' },
  { id: 'bk82', name: 'Machine Learning',                              author: 'Tom Mitchell',                      category: 'Artificial Intelligence', isbn: '978-0070428077', copies: 4, available: 4, description: 'Classic introduction to machine learning concepts.' },
  { id: 'bk83', name: 'Deep Learning',                                 author: 'Goodfellow, Bengio & Courville',    category: 'Artificial Intelligence', isbn: '978-0262035613', copies: 4, available: 3, description: 'Comprehensive textbook on deep learning.' },
  { id: 'bk84', name: 'Pattern Recognition and Machine Learning',      author: 'Christopher Bishop',                category: 'Artificial Intelligence', isbn: '978-0387310732', copies: 3, available: 3, description: 'Advanced treatment of pattern recognition and ML.' },
  { id: 'bk85', name: 'Hands-On Machine Learning',                     author: 'Aurélien Géron',                    category: 'Artificial Intelligence', isbn: '978-1492032649', copies: 4, available: 4, description: 'Practical ML with Scikit-Learn and TensorFlow.' },
  { id: 'bk86', name: 'Introduction to Machine Learning',              author: 'Ethem Alpaydin',                    category: 'Artificial Intelligence', isbn: '978-0262028189', copies: 3, available: 3, description: 'Accessible introduction to machine learning algorithms.' },
  { id: 'bk87', name: 'Neural Networks and Deep Learning',             author: 'Michael Nielsen',                   category: 'Artificial Intelligence', isbn: '978-8432891410', copies: 3, available: 3, description: 'Free online book on neural networks and deep learning.' },

  // Theory of Computation
  { id: 'bk88', name: 'Introduction to Automata Theory',               author: 'Hopcroft, Motwani & Ullman',        category: 'Theory of Computation', isbn: '978-0321455369', copies: 6,  available: 5, description: 'Standard automata theory textbook for CS students.' },
  { id: 'bk89', name: 'Theory of Computer Science',                    author: 'Mishra & Chandrasekaran',           category: 'Theory of Computation', isbn: '978-8120327726', copies: 7,  available: 7, description: 'Theory of computation for Indian university syllabi.' },
  { id: 'bk90', name: 'Formal Languages and Automata Theory',          author: 'Peter Linz',                        category: 'Theory of Computation', isbn: '978-1449615604', copies: 5,  available: 5, description: 'Introduction to formal language theory and automata.' },
  { id: 'bk91', name: 'Introduction to the Theory of Computation',     author: 'Michael Sipser',                    category: 'Theory of Computation', isbn: '978-1133187790', copies: 4,  available: 4, description: 'Accessible and precise introduction to computation theory.' },
  { id: 'bk92', name: 'Elements of the Theory of Computation',         author: 'Lewis & Papadimitriou',             category: 'Theory of Computation', isbn: '978-0132624787', copies: 3,  available: 3, description: 'Mathematical treatment of computability and complexity.' },

  // Web Development
  { id: 'bk93', name: 'HTML and CSS: Design and Build Websites',       author: 'Jon Duckett',                       category: 'Web Development',      isbn: '978-1118008188', copies: 5,  available: 5, description: 'Visual and project-based approach to learning HTML and CSS.' },
  { id: 'bk94', name: 'JavaScript and JQuery',                         author: 'Jon Duckett',                       category: 'Web Development',      isbn: '978-1118531648', copies: 4,  available: 4, description: 'Interactive front-end web development with JavaScript.' },
  { id: 'bk95', name: "You Don't Know JS",                             author: 'Kyle Simpson',                      category: 'Web Development',      isbn: '978-1491924464', copies: 3,  available: 3, description: 'Deep dive series into the JavaScript language.' },
  { id: 'bk96', name: 'Django for Beginners',                          author: 'William Vincent',                   category: 'Web Development',      isbn: '978-1735467207', copies: 3,  available: 3, description: 'Build websites with Python and Django framework.' },
  { id: 'bk97', name: 'Node.js Design Patterns',                       author: 'Casciaro & Mammino',                category: 'Web Development',      isbn: '978-1839214110', copies: 3,  available: 3, description: 'Design and implement production-grade Node.js applications.' },
  { id: 'bk98', name: 'React: Up and Running',                         author: 'Stoyan Stefanov',                   category: 'Web Development',      isbn: '978-1491931820', copies: 3,  available: 3, description: 'Building web applications with React.' },

  // Compiler Design
  { id: 'bk99',  name: 'Compilers: Principles, Techniques and Tools',  author: 'Aho, Lam, Sethi & Ullman',         category: 'Compiler Design',      isbn: '978-0321486813', copies: 5,  available: 4, description: 'The Dragon Book — definitive compiler design reference.' },
  { id: 'bk100', name: 'Engineering a Compiler',                        author: 'Cooper & Torczon',                  category: 'Compiler Design',      isbn: '978-0120884780', copies: 3,  available: 3, description: 'Modern treatment of compiler design and implementation.' },

  // Security
  { id: 'bk101', name: 'Cryptography and Network Security',             author: 'William Stallings',                  category: 'Security',             isbn: '978-0134444284', copies: 5,  available: 4, description: 'Principles and practice of cryptography and network security.' },
  { id: 'bk102', name: 'Computer Security: Art and Science',            author: 'Matt Bishop',                       category: 'Security',             isbn: '978-0201440997', copies: 3,  available: 3, description: 'Comprehensive treatment of computer security principles.' },
  { id: 'bk103', name: 'Ethical Hacking',                               author: 'Kimberly Graves',                   category: 'Security',             isbn: '978-0071838917', copies: 3,  available: 2, description: 'CEH exam guide covering ethical hacking techniques.' },

  // Advanced / Miscellaneous
  { id: 'bk104', name: 'Distributed Systems',                           author: 'Tanenbaum & Van Steen',             category: 'Advanced',             isbn: '978-0132392273', copies: 4,  available: 4, description: 'Principles and paradigms of distributed computing systems.' },
  { id: 'bk105', name: 'The Art of Computer Programming',               author: 'Donald Knuth',                      category: 'Advanced',             isbn: '978-0201853940', copies: 3,  available: 3, description: 'Monumental multi-volume work on algorithms and programming.' },
  { id: 'bk106', name: 'Structure and Interpretation of Computer Programs', author: 'Abelson & Sussman',             category: 'Advanced',             isbn: '978-0262510875', copies: 3,  available: 3, description: 'Classic MIT textbook, known as SICP or the Wizard Book.' },
  { id: 'bk107', name: 'Computer Graphics using OpenGL',                 author: 'F.S. Hill',                         category: 'Advanced',             isbn: '978-0131496705', copies: 3,  available: 3, description: 'Introduction to computer graphics using OpenGL.' },
  { id: 'bk108', name: 'Digital Image Processing',                       author: 'Gonzalez & Woods',                  category: 'Advanced',             isbn: '978-0133356724', copies: 4,  available: 3, description: 'Standard reference for digital image processing.' },
  { id: 'bk109', name: 'Cloud Computing',                                author: 'Rajkumar Buyya',                    category: 'Advanced',             isbn: '978-8126521340', copies: 3,  available: 3, description: 'Principles and paradigms of cloud computing.' },
  { id: 'bk110', name: 'Software Testing: A Craftsman\'s Approach',      author: 'Paul Jorgensen',                    category: 'Advanced',             isbn: '978-1466560680', copies: 3,  available: 3, description: 'A comprehensive guide to software testing techniques.' },
  { id: 'bk111', name: 'Introduction to Parallel Computing',             author: 'Ananth Grama',                      category: 'Advanced',             isbn: '978-0201648652', copies: 2,  available: 2, description: 'Design and analysis of parallel algorithms.' }
];

const SEED_MEMBERS = [
  { id: 'mb1', name: 'Amit Sharma',     email: 'amit.sharma@gmail.com',   mobile: '9800001001', memberType: 'General',  joinDate: '2025-01-10', status: 'active',   address: 'Baner, Pune' },
  { id: 'mb2', name: 'Sunita Rao',      email: 'sunita.rao@gmail.com',    mobile: '9800001002', memberType: 'Senior',   joinDate: '2025-02-05', status: 'active',   address: 'Kothrud, Pune' },
  { id: 'mb3', name: 'Ramesh Nair',     email: 'ramesh.nair@gmail.com',   mobile: '9800001003', memberType: 'General',  joinDate: '2025-03-01', status: 'active',   address: 'Wakad, Pune' },
  { id: 'mb4', name: 'Geeta Patel',     email: 'geeta.patel@gmail.com',   mobile: '9800001004', memberType: 'General',  joinDate: '2024-11-20', status: 'inactive', address: 'Hinjewadi, Pune' },
  { id: 'mb5', name: 'Vijay Iyer',      email: 'vijay.iyer@gmail.com',    mobile: '9800001005', memberType: 'Research', joinDate: '2025-01-28', status: 'active',   address: 'Aundh, Pune' },
  { id: 'mb6', name: 'Lalitha Krishnan',email: 'lalitha.k@gmail.com',     mobile: '9800001006', memberType: 'Research', joinDate: '2025-02-18', status: 'active',   address: 'Karve Nagar, Pune' }
];

// Issues — mix of Issued (active), Overdue, Returned
const SEED_ISSUES = [
  // Currently ISSUED (not overdue)
  { id: 'is1',  bookId: 'bk22',  studentId: 'st1',  issueDate: '2026-03-05', dueDate: '2026-03-19', returnDate: null, status: 'issued' },
  { id: 'is2',  bookId: 'bk44',  studentId: 'st5',  issueDate: '2026-03-08', dueDate: '2026-03-22', returnDate: null, status: 'issued' },
  { id: 'is3',  bookId: 'bk1',   studentId: 'st9',  issueDate: '2026-03-10', dueDate: '2026-03-24', returnDate: null, status: 'issued' },
  { id: 'is4',  bookId: 'bk36',  studentId: 'st15', issueDate: '2026-03-12', dueDate: '2026-03-26', returnDate: null, status: 'issued' },
  { id: 'is5',  bookId: 'bk51',  studentId: 'st22', issueDate: '2026-03-11', dueDate: '2026-03-25', returnDate: null, status: 'issued' },
  { id: 'is6',  bookId: 'bk66',  studentId: 'st30', issueDate: '2026-03-13', dueDate: '2026-03-27', returnDate: null, status: 'issued' },
  { id: 'is7',  bookId: 'bk81',  studentId: 'st37', issueDate: '2026-03-07', dueDate: '2026-03-21', returnDate: null, status: 'issued' },
  { id: 'is8',  bookId: 'bk88',  studentId: 'st45', issueDate: '2026-03-14', dueDate: '2026-03-28', returnDate: null, status: 'issued' },
  { id: 'is9',  bookId: 'bk10',  studentId: 'st20', issueDate: '2026-03-06', dueDate: '2026-03-20', returnDate: null, status: 'issued' },
  { id: 'is10', bookId: 'bk74',  studentId: 'st33', issueDate: '2026-03-09', dueDate: '2026-03-23', returnDate: null, status: 'issued' },

  // OVERDUE (due date is past, not returned)
  { id: 'is11', bookId: 'bk58',  studentId: 'st3',  issueDate: '2026-02-15', dueDate: '2026-03-01', returnDate: null, status: 'issued' },
  { id: 'is12', bookId: 'bk7',   studentId: 'st12', issueDate: '2026-02-10', dueDate: '2026-02-24', returnDate: null, status: 'issued' },
  { id: 'is13', bookId: 'bk99',  studentId: 'st19', issueDate: '2026-01-28', dueDate: '2026-02-11', returnDate: null, status: 'issued' },
  { id: 'is14', bookId: 'bk2',   studentId: 'st40', issueDate: '2026-02-20', dueDate: '2026-03-06', returnDate: null, status: 'issued' },
  { id: 'is15', bookId: 'bk83',  studentId: 'st28', issueDate: '2026-02-22', dueDate: '2026-03-08', returnDate: null, status: 'issued' },

  // RETURNED
  { id: 'is16', bookId: 'bk23',  studentId: 'st7',  issueDate: '2026-01-15', dueDate: '2026-01-29', returnDate: '2026-01-28', status: 'returned' },
  { id: 'is17', bookId: 'bk45',  studentId: 'st13', issueDate: '2026-01-20', dueDate: '2026-02-03', returnDate: '2026-02-03', status: 'returned' },
  { id: 'is18', bookId: 'bk75',  studentId: 'st21', issueDate: '2026-02-01', dueDate: '2026-02-15', returnDate: '2026-02-14', status: 'returned' },
  { id: 'is19', bookId: 'bk52',  studentId: 'st31', issueDate: '2026-01-10', dueDate: '2026-01-24', returnDate: '2026-01-22', status: 'returned' },
  { id: 'is20', bookId: 'bk60',  studentId: 'st48', issueDate: '2025-12-20', dueDate: '2026-01-03', returnDate: '2026-01-02', status: 'returned' },
  { id: 'is21', bookId: 'bk85',  studentId: 'st2',  issueDate: '2026-02-28', dueDate: '2026-03-14', returnDate: '2026-03-12', status: 'returned' },
  { id: 'is22', bookId: 'bk24',  studentId: 'st42', issueDate: '2026-01-05', dueDate: '2026-01-19', returnDate: '2026-01-18', status: 'returned' }
];

// ============================================================
//  INITIALISE localStorage with seed data (only first time)
// ============================================================
function initData() {
  if (!localStorage.getItem(FS.roles))    localStorage.setItem(FS.roles,    JSON.stringify(SEED_ROLES));
  if (!localStorage.getItem(FS.users))    localStorage.setItem(FS.users,    JSON.stringify(SEED_USERS));
  if (!localStorage.getItem(FS.books))    localStorage.setItem(FS.books,    JSON.stringify(SEED_BOOKS));
  if (!localStorage.getItem(FS.students)) localStorage.setItem(FS.students, JSON.stringify(SEED_STUDENTS));
  if (!localStorage.getItem(FS.members))  localStorage.setItem(FS.members,  JSON.stringify(SEED_MEMBERS));
  if (!localStorage.getItem(FS.issues))   localStorage.setItem(FS.issues,   JSON.stringify(SEED_ISSUES));
}
initData();

// ============================================================
//  HELPER UTILITIES
// ============================================================
function gid() { return Date.now().toString(36) + Math.random().toString(36).substr(2, 5); }
function getAll(key)       { try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch(e) { return []; } }
function saveAll(key, arr) { localStorage.setItem(key, JSON.stringify(arr)); }

function today() { return new Date().toISOString().split('T')[0]; }
function addDays(date, n) {
  const d = new Date(date); d.setDate(d.getDate() + n);
  return d.toISOString().split('T')[0];
}
function formatDate(d) {
  if (!d) return '—';
  const parts = d.split('-');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${parts[2]} ${months[parseInt(parts[1])-1]} ${parts[0]}`;
}
function daysLeft(dueDate) {
  const diff = new Date(dueDate) - new Date(today());
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
function isOverdue(issue) {
  return issue.status === 'issued' && issue.dueDate < today();
}

// ============================================================
//  AUTH
// ============================================================
function login(username, password) {
  const users = getAll(FS.users);
  const roles = getAll(FS.roles);
  const user = users.find(u => u.username === username.trim() && u.password === password);
  if (!user) return null;
  const role = roles.find(r => r.id === user.roleId);
  const session = { ...user, roleName: role ? role.name : 'Unknown' };
  sessionStorage.setItem(FS.session, JSON.stringify(session));
  return session;
}
function logout() {
  sessionStorage.removeItem(FS.session);
  window.location.href = 'index.html';
}
function getSession() {
  try { return JSON.parse(sessionStorage.getItem(FS.session)); } catch(e) { return null; }
}
function checkAuth() {
  const s = getSession();
  if (!s) { window.location.href = 'index.html'; return null; }
  return s;
}
function isAdmin(session) { return session && getAll(FS.roles).find(r => r.id === session.roleId && r.name === 'Administrator'); }

// ============================================================
//  BOOKS CRUD
// ============================================================
function getBooks()           { return getAll(FS.books); }
function getBook(id)          { return getAll(FS.books).find(b => b.id === id); }
function addBook(data)        { const arr = getAll(FS.books); const b = { ...data, id: gid() }; arr.push(b); saveAll(FS.books, arr); return b; }
function updateBook(id, data) { const arr = getAll(FS.books).map(b => b.id === id ? { ...b, ...data } : b); saveAll(FS.books, arr); }
function deleteBook(id)       { saveAll(FS.books, getAll(FS.books).filter(b => b.id !== id)); }

// ============================================================
//  STUDENTS CRUD
// ============================================================
function getStudents()           { return getAll(FS.students); }
function getStudent(id)          { return getAll(FS.students).find(s => s.id === id); }
function addStudent(data)        { const arr = getAll(FS.students); const s = { ...data, id: gid() }; arr.push(s); saveAll(FS.students, arr); return s; }
function updateStudent(id, data) { const arr = getAll(FS.students).map(s => s.id === id ? { ...s, ...data } : s); saveAll(FS.students, arr); }
function deleteStudent(id)       { saveAll(FS.students, getAll(FS.students).filter(s => s.id !== id)); }

// ============================================================
//  MEMBERS CRUD
// ============================================================
function getMembers()           { return getAll(FS.members); }
function getMember(id)          { return getAll(FS.members).find(m => m.id === id); }
function addMember(data)        { const arr = getAll(FS.members); const m = { ...data, id: gid(), joinDate: today() }; arr.push(m); saveAll(FS.members, arr); return m; }
function updateMember(id, data) { const arr = getAll(FS.members).map(m => m.id === id ? { ...m, ...data } : m); saveAll(FS.members, arr); }
function deleteMember(id)       { saveAll(FS.members, getAll(FS.members).filter(m => m.id !== id)); }

// ============================================================
//  ISSUES (BORROW / RETURN)
// ============================================================
function getIssues()  { return getAll(FS.issues); }
function getIssue(id) { return getAll(FS.issues).find(i => i.id === id); }

function issueBook(bookId, studentId) {
  const book = getBook(bookId);
  if (!book || book.available < 1) return { ok: false, msg: 'Book not available' };
  const active = getIssues().find(i => i.bookId === bookId && i.studentId === studentId && i.status === 'issued');
  if (active) return { ok: false, msg: 'Student already has this book' };
  const due = addDays(today(), 14);
  const rec = { id: gid(), bookId, studentId, issueDate: today(), dueDate: due, returnDate: null, status: 'issued' };
  const arr = getAll(FS.issues); arr.push(rec); saveAll(FS.issues, arr);
  updateBook(bookId, { available: book.available - 1 });
  return { ok: true, record: rec };
}

function returnBook(issueId) {
  const issues = getAll(FS.issues);
  const idx = issues.findIndex(i => i.id === issueId);
  if (idx === -1) return false;
  const book = getBook(issues[idx].bookId);
  issues[idx] = { ...issues[idx], returnDate: today(), status: 'returned' };
  saveAll(FS.issues, issues);
  if (book) updateBook(book.id, { available: Math.min(book.available + 1, book.copies) });
  return true;
}

// ============================================================
//  USERS CRUD (admin only)
// ============================================================
function getUsers()           { return getAll(FS.users); }
function addUser(data)        { const arr = getAll(FS.users); const u = { ...data, id: gid(), joinDate: today() }; arr.push(u); saveAll(FS.users, arr); return u; }
function updateUser(id, data) { const arr = getAll(FS.users).map(u => u.id === id ? { ...u, ...data } : u); saveAll(FS.users, arr); }
function deleteUser(id)       { saveAll(FS.users, getAll(FS.users).filter(u => u.id !== id)); }
function getRoles()           { return getAll(FS.roles); }

// ============================================================
//  STATS
// ============================================================
function getStats() {
  const books    = getBooks();
  const students = getStudents();
  const members  = getMembers();
  const issues   = getIssues();
  const td       = today();
  const activeIssues  = issues.filter(i => i.status === 'issued');
  const overdueIssues = activeIssues.filter(i => i.dueDate < td);
  const returned      = issues.filter(i => i.status === 'returned');
  return {
    totalBooks:    books.length,
    totalCopies:   books.reduce((s,b) => s + b.copies, 0),
    available:     books.reduce((s,b) => s + b.available, 0),
    totalStudents: students.length,
    totalMembers:  members.length,
    activeIssues:  activeIssues.length,
    overdueCount:  overdueIssues.length,
    returned:      returned.length,
    totalIssues:   issues.length
  };
}

// ============================================================
//  UI HELPERS
// ============================================================
function showToast(msg, type = 'success') {
  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.innerHTML = `<span>${icons[type]||''}</span> ${msg}`;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

function confirm(msg, cb) {
  if (window.confirm(msg)) cb();
}

function getBookName(id)    { const b = getBook(id);    return b ? b.name    : '(Unknown Book)'; }
function getStudentName(id) { const s = getStudent(id); return s ? s.name    : '(Unknown Student)'; }
function getRollNo(id)      { const s = getStudent(id); return s ? s.rollNo  : '—'; }
function getIssueBadge(issue) {
  if (issue.status === 'returned') return '<span class="badge badge-success">Returned</span>';
  if (isOverdue(issue))            return '<span class="badge badge-danger">Overdue</span>';
  return '<span class="badge badge-info">Issued</span>';
}

// Sidebar avatar letter
function avatarLetter(name) { return name ? name.charAt(0).toUpperCase() : '?'; }
