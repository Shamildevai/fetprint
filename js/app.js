    const INITIAL_FET_XML_DATA = `<?xml version="1.0" encoding="UTF-8"?>
<fet version="7.10.5">
  <Mode>Mornings_Afternoons</Mode>
  <Institution_Name>ثانوية المتنبي</Institution_Name>
  <Comments>البرنامج الرسمي</Comments>
  <Days_List>
    <Number_of_Days>10</Number_of_Days>
    <Day><Name>الاحد ص</Name></Day>
    <Day><Name>الاحد م</Name></Day>
    <Day><Name>الاثنين ص</Name></Day>
    <Day><Name>الاثنين م</Name></Day>
    <Day><Name>الثلاثاء ص</Name></Day>
    <Day><Name>الثلاثاء م</Name></Day>
    <Day><Name>الاربعاء ص</Name></Day>
    <Day><Name>الاربعاء م</Name></Day>
    <Day><Name>الخميس ص</Name></Day>
    <Day><Name>الخميس م</Name></Day>
  </Days_List>
  <Hours_List>
    <Number_of_Hours>4</Number_of_Hours>
    <Hour><Name>حصة 1</Name></Hour>
    <Hour><Name>حصة 2</Name></Hour>
    <Hour><Name>حصة 3</Name></Hour>
    <Hour><Name>حصة 4</Name></Hour>
  </Hours_List>
</fet>`;

    const DEFAULT_SUBJECT_COLORS = {
      "عربية": "#1d4ed8",
      "اللغة العربية": "#1d4ed8",
      "لغة عربية": "#1d4ed8",
      "عربية أ.م": "#2563eb",
      "أدب عربي": "#1d4ed8",
      "ادب عربي": "#1d4ed8",
      "أدب عربي TD": "#2563eb",
      "ادب اعلام آلي": "#1e40af",
      "عربية/اعلام": "#1e40af",
      "رياضيات": "#b45309",
      "الرياضيات": "#b45309",
      "رياضيات أ.م": "#d97706",
      "فرنسية": "#be123c",
      "اللغة الفرنسية": "#be123c",
      "لغة فرنسية": "#be123c",
      "فرنسية أ.م": "#e11d48",
      "أنجليزية": "#6d28d9",
      "إنجليزية": "#6d28d9",
      "اللغة الإنجليزية": "#6d28d9",
      "لغة انجليزية": "#6d28d9",
      "انجليزية": "#6d28d9",
      "انجليزية أ.م": "#7c3aed",
      "لغة اامانية": "#9333ea",
      "لغة ألمانية": "#9333ea",
      "لغة اسبانية": "#9333ea",
      "لغة أجنبية 3": "#9333ea",
      "فيزياء": "#0284c7",
      "علوم فيزياء": "#0284c7",
      "علوم فيزيائية": "#0284c7",
      "علوم/فيزياء": "#0284c7",
      "علوم فيزيائية TP": "#0891b2",
      "فيزياء/تطبيق": "#0891b2",
      "علوم": "#047857",
      "علوم طبيعية": "#047857",
      "العلوم الطبيعية": "#047857",
      "علوم تطبيقي": "#059669",
      "علوم طبيعية TP": "#059669",
      "علوم/تطبيق": "#059669",
      "إجتماعيات": "#c2410c",
      "العلوم الاجتماعية": "#c2410c",
      "تاريخ وجغرافيا": "#c2410c",
      "ت إسلامية": "#0f766e",
      "التربية الإسلامية": "#0f766e",
      "علوم اسلامية": "#0f766e",
      "علوم إسلامية": "#0f766e",
      "فلسفة": "#7c2d12",
      "محاسبة": "#0f766e",
      "تسيير محاسبي": "#0f766e",
      "اقتصاد": "#c2410c",
      "إقتصاد ومناجمنت": "#c2410c",
      "مناجمنت": "#c2410c",
      "قانون": "#9f1239",
      "تكنولوجيا": "#4f46e5",
      "التكنولوجيا": "#4f46e5",
      "تكنو/فيزياء": "#4338ca",
      "تكنولوجيا تطبيقي": "#6366f1",
      "تكنولوجيا اعلام آلي": "#4338ca",
      "اعلام/تكنو": "#4338ca",
      "إعلام آلي": "#334155",
      "الاعلام الآلي": "#334155",
      "اعلام آلي": "#334155",
      "اعلام الي ": "#334155",
      "اعلام الي/اعلام الي": "#334155",
      "إعلام آلي TP": "#475569",
      "رياضة": "#ca8a04",
      "التربية البدنية": "#ca8a04",
      "تربية بدنية": "#ca8a04",
      "رسم": "#a21caf",
      "التربية الفنية": "#a21caf",
      "تربية فنية": "#a21caf",
      "موسيقى": "#e11d48",
      "أمازيغية": "#15803d",
      "الأمازيغية": "#15803d",
      "استدراك": "#dc2626"
    };

    let appData = {
      institution: "ثانوية المتنبي",
      days: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس"],
      dayMapping: {},
      hours: [
        { id: "حصة 1", label: "الحصة 1", morningTime: "08:00 - 09:00", afternoonTime: "13:30 - 14:30" },
        { id: "حصة 2", label: "الحصة 2", morningTime: "09:00 - 10:00", afternoonTime: "14:30 - 15:30" },
        { id: "حصة 3", label: "الحصة 3", morningTime: "10:00 - 11:00", afternoonTime: "15:30 - 16:30" },
        { id: "حصة 4", label: "الحصة 4", morningTime: "11:00 - 12:00", afternoonTime: "16:30 - 17:30" }
      ],
      teachers: [],
      groups: [],
      rooms: [],
      subgroupMap: {},
      groupHomeRooms: {},
      subjectDefaultRooms: {},
      subjects: [],
      activities: {},
      groupSchedules: {},
      teacherSchedules: {},
      roomSchedules: {},
      settings: {
        republic: "الجمهورية الجزائرية الديمقراطية الشعبية",
        ministry: "وزارة التربية الوطنية",
        directorate: "مديرية التربية لولاية تلمسان",
        schoolName: "ثانوية المتنبي",
        docTitle: "جدول استعمال الزمن الأسبوعي الرسمي",
        pointingTitle: "ورقة الحضور اليومي وتأشيرة الأساتذة (الورقة الدوارة)",
        pointingAdminLabel: "مستشار(ة) التربية",
        pointingSupervisorLabel: "المشرف(ة) المكلف(ة) بالجناح",
        pointingOrientation: "landscape",
        pointingPageLayout: "1page",
        pointingShowSubjects: true,
        pointingShowTeachers: true,
        pointingShowRooms: true,
        pointingShowSignatures: true,
        gridOrientation: "days-cols", // "days-cols" (Days horizontal in header) or "days-rows" (Days vertical in rows)
        schoolYear: "2024 / 2025",
        introText: "يشرفني أن أضع بين أيديكم جدول التوقيت الأسبوعي متمنياً للجميع كل التوفيق والنجاح في أداء المهام التربوية والتعليمية.",
        showIntroClasses: true,
        showIntroTeachers: true,
        pageOrientation: "landscape",
        template: "classic-dz",
        theme: "classic-dz",
        headerFont: "'Cairo', sans-serif",
        inkSaver: false,
        printNUp: 1,
        colorizeSubjects: true,
        showTeachers: true,
        showRooms: true,
        showClasses: true,
        projectSlug: "",
        serverUrl: "https://fetprint.fetsync.org",
        footerNote: "ملاحظة: هذا التوقيت رسمي ويسري مفعوله ابتداءً من الدخول المدرسي.",
        directorLabel: "المديـــر(ة)",
        stampLabel: "حرر بـ: الجزائر في: .................",
        roomFont: "'Fira Code', monospace",
        subjectColors: { ...DEFAULT_SUBJECT_COLORS }
      }
    };

    let pendingRawXml = '';
    let pendingExtractedData = null;

    let currentMode = 'classes';
    let currentSelectedId = '';
    let isPaperPreviewModeActive = false;
    let globalSubMode = 'classes_global';
    let roomSubMode = 'matrix';
    let currentPointingPeriodKey = '';

    function getAutoColor(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      const hue = Math.abs(hash % 360);
      return `hsl(${hue}, 65%, 40%)`;
    }

    function resolveStudentGroups(studentName) {
      if (!studentName) return [];
      const sTrim = studentName.trim();
      
      if (appData.groups.includes(sTrim)) {
        return [{ group: sTrim, subgroup: '' }];
      }
      
      for (const grp of appData.groups) {
        const subs = appData.subgroupMap[grp] || [];
        if (subs.includes(sTrim)) {
          let label = sTrim.startsWith(grp) ? sTrim.slice(grp.length) : sTrim;
          label = label.replace(/^[-_\s]+/, '').trim();
          return [{ group: grp, subgroup: label || sTrim }];
        }
      }
      
      const sortedGroups = [...appData.groups].sort((a, b) => b.length - a.length);
      for (const grp of sortedGroups) {
        if (sTrim.startsWith(grp)) {
          let remainder = sTrim.slice(grp.length).replace(/^[-_\s]+/, '').trim();
          return [{ group: grp, subgroup: remainder }];
        }
      }

      const cleanTarget = sTrim.replace(/[\s\-_]/g, '');
      for (const grp of sortedGroups) {
        const cleanGrp = grp.replace(/[\s\-_]/g, '');
        if (cleanTarget.startsWith(cleanGrp)) {
          let remainder = cleanTarget.slice(cleanGrp.length);
          return [{ group: grp, subgroup: remainder }];
        }
      }

      return [{ group: sTrim, subgroup: '' }];
    }

    function parseFetXml(xmlString) {
      try {
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlString, "text/xml");

        // 1. Institution Name
        const instElem = xml.querySelector("Institution_Name");
        if (instElem && instElem.textContent.trim()) {
          appData.institution = instElem.textContent.trim();
          appData.settings.schoolName = appData.institution;
        }

        function getCanonicalDay(str) {
          if (!str) return '';
          let s = str.trim();
          s = s.replace(/^[0-9\s\-_.]+/, '').trim();
          s = s.replace(/[\s\-_]*(ص|م|صباح|مساء|صباحا|مساءا|AM|PM|Matin|Soir)$/i, '').trim();

          if (/أحد|احد|dimanche|sunday/i.test(s)) return 'الأحد';
          if (/اثنين|إثنين|lundi|monday/i.test(s)) return 'الإثنين';
          if (/ثلاث|mardi|tuesday/i.test(s)) return 'الثلاثاء';
          if (/أربع|اربع|mercredi|wednesday/i.test(s)) return 'الأربعاء';
          if (/خميس|jeudi|thursday/i.test(s)) return 'الخميس';
          if (/جمع|vendredi|friday/i.test(s)) return 'الجمعة';
          if (/سبت|samedi|saturday/i.test(s)) return 'السبت';
          return s;
        }

        // 2. Days and Periods Normalization
        appData.dayMapping = {};
        const realDayNodes = xml.querySelectorAll("Real_Days_List > Real_Day > Name");
        let parsedRealDays = [];
        realDayNodes.forEach(rd => {
          const raw = rd.textContent.trim();
          const canon = getCanonicalDay(raw);
          if (canon && !parsedRealDays.includes(canon)) parsedRealDays.push(canon);
        });

        const dayNodes = xml.querySelectorAll("Days_List > Day > Name");
        const rawDays = [];
        dayNodes.forEach(d => {
          const raw = d.textContent.trim();
          if (raw) rawDays.push(raw);
        });

        if (parsedRealDays.length > 0) {
          appData.days = parsedRealDays;
        } else {
          const detected = [];
          rawDays.forEach(raw => {
            const canon = getCanonicalDay(raw);
            if (canon && !detected.includes(canon)) detected.push(canon);
          });
          if (detected.length > 0) appData.days = detected;
        }

        rawDays.forEach((raw, idx) => {
          let period = 'ص';
          if (/\bم\b|مساء|soir|afternoon|pm/i.test(raw)) period = 'م';
          else if (/\bص\b|صباح|matin|morning|am/i.test(raw)) period = 'ص';
          else if (rawDays.length === appData.days.length * 2) period = (idx % 2 === 0) ? 'ص' : 'م';

          let matchedReal = getCanonicalDay(raw);
          if (!appData.days.includes(matchedReal)) {
            const approx = appData.days.find(d => getCanonicalDay(d) === matchedReal);
            if (approx) matchedReal = approx;
            else if (appData.days.length > 0) {
              const dayIdx = Math.floor(idx / 2) % appData.days.length;
              matchedReal = appData.days[dayIdx];
            }
          }

          const mapVal = { realDay: matchedReal, period };
          appData.dayMapping[raw] = mapVal;
          appData.dayMapping[raw.trim()] = mapVal;
          appData.dayMapping[raw.replace(/\s+/g, ' ')] = mapVal;
          appData.dayMapping[raw.replace(/\s+/g, '')] = mapVal;
        });

        // 3. Dynamic Hours & Timings Extraction
        const hourNodes = xml.querySelectorAll("Hours_List > Hour");
        if (hourNodes.length > 0) {
          const realHourNodes = xml.querySelectorAll("Real_Hours_List > Real_Hour");
          const realHourTimes = [];
          realHourNodes.forEach(rh => {
            const longName = rh.querySelector("Long_Name")?.textContent.trim() || "";
            const rhName = rh.querySelector("Name")?.textContent.trim() || "";
            const fullCombined = (longName + " " + rhName).trim();
            const timeMatch = fullCombined.match(/\d{1,2}:\d{2}\s*[-–—]\s*\d{1,2}:\d{2}/);
            if (timeMatch) realHourTimes.push(timeMatch[0]);
          });

          appData.hours = [];
          hourNodes.forEach((hNode, idx) => {
            const hId = hNode.querySelector("Name")?.textContent.trim() || `H${idx + 1}`;
            let hNumMatch = hId.match(/\d+/);
            let hIndex = hNumMatch ? hNumMatch[0] : (idx + 1);
            let hLabel = `الحصة ${hIndex}`;

            let morningTime = "08:00 - 09:00";
            let afternoonTime = "13:30 - 14:30";

            if (realHourTimes.length >= hourNodes.length * 2) {
              morningTime = realHourTimes[idx];
              afternoonTime = realHourTimes[hourNodes.length + idx];
            } else {
              const mHour = 8 + idx;
              morningTime = `${String(mHour).padStart(2, '0')}:00 - ${String(mHour + 1).padStart(2, '0')}:00`;
              const aHour = 13 + (idx >= 2 ? idx + 0.5 : idx);
              const aStartH = Math.floor(aHour);
              const aStartM = (aHour % 1 === 0) ? '30' : '00';
              const aEndH = Math.floor(aHour + 1);
              const aEndM = aStartM;
              afternoonTime = `${String(aStartH).padStart(2, '0')}:${aStartM} - ${String(aEndH).padStart(2, '0')}:${aEndM}`;
            }

            appData.hours.push({ id: hId, label: hLabel, morningTime, afternoonTime });
          });
        }

        // 4. Subjects & Colors
        const subjectElems = xml.querySelectorAll("Subjects_List > Subject > Name");
        appData.subjects = [];
        subjectElems.forEach(el => {
          const sName = el.textContent.trim();
          if (sName && !appData.subjects.includes(sName)) {
            appData.subjects.push(sName);
            if (!appData.settings.subjectColors[sName]) {
              appData.settings.subjectColors[sName] = DEFAULT_SUBJECT_COLORS[sName] || getAutoColor(sName);
            }
          }
        });

        // 5. Teachers
        const teacherElems = xml.querySelectorAll("Teachers_List > Teacher > Name");
        appData.teachers = [];
        teacherElems.forEach(el => {
          const tName = el.textContent.trim();
          if (tName && !appData.teachers.includes(tName)) appData.teachers.push(tName);
        });

        // 6. Rooms
        appData.rooms = [];
        const roomElems = xml.querySelectorAll("Rooms_List > Room > Name");
        roomElems.forEach(el => {
          const rName = el.textContent.trim();
          if (rName && !appData.rooms.includes(rName)) appData.rooms.push(rName);
        });

        // 7. Student Groups & Subgroups
        appData.groups = [];
        appData.subgroupMap = {};
        const yearElems = xml.querySelectorAll("Students_List > Year");
        yearElems.forEach(yearEl => {
          const yNameEl = Array.from(yearEl.children).find(c => c.tagName === "Name");
          const yName = yNameEl ? yNameEl.textContent.trim() : "";
          const groupElems = yearEl.querySelectorAll("Group");
          
          if (groupElems.length > 0) {
            groupElems.forEach(grpEl => {
              const grpNameEl = Array.from(grpEl.children).find(c => c.tagName === "Name");
              if (grpNameEl) {
                const gName = grpNameEl.textContent.trim();
                if (gName && !appData.groups.includes(gName)) {
                  appData.groups.push(gName);
                  appData.subgroupMap[gName] = [];
                  const subElems = grpEl.querySelectorAll("Subgroup > Name");
                  subElems.forEach(sEl => {
                    const subName = sEl.textContent.trim();
                    if (subName) appData.subgroupMap[gName].push(subName);
                  });
                }
              }
            });
          } else if (yName) {
            if (!appData.groups.includes(yName)) {
              appData.groups.push(yName);
              appData.subgroupMap[yName] = [];
            }
          }
        });

        xml.querySelectorAll("Activities_List > Activity > Students").forEach(stNode => {
          const st = stNode.textContent.trim();
          if (st && !appData.groups.includes(st)) {
            const isSub = Object.values(appData.subgroupMap).some(arr => arr.includes(st));
            if (!isSub) {
              const matched = appData.groups.some(g => st.startsWith(g) || g.startsWith(st));
              if (!matched) {
                appData.groups.push(st);
                appData.subgroupMap[st] = [];
              }
            }
          }
        });

        // 8. Space Constraints
        appData.groupHomeRooms = {};
        xml.querySelectorAll("Space_Constraints_List > ConstraintStudentsSetHomeRoom").forEach(c => {
          const stEl = c.querySelector("Students");
          const rmEl = c.querySelector("Room");
          if (stEl && rmEl) appData.groupHomeRooms[stEl.textContent.trim()] = rmEl.textContent.trim();
        });

        appData.subjectDefaultRooms = {};
        xml.querySelectorAll("Space_Constraints_List > ConstraintSubjectPreferredRoom").forEach(c => {
          const subEl = c.querySelector("Subject");
          const rmEl = c.querySelector("Room");
          if (subEl && rmEl) appData.subjectDefaultRooms[subEl.textContent.trim()] = rmEl.textContent.trim();
        });
        xml.querySelectorAll("Space_Constraints_List > ConstraintSubjectPreferredRooms").forEach(c => {
          const subEl = c.querySelector("Subject");
          const rmEl = c.querySelector("Preferred_Room");
          if (subEl && rmEl) appData.subjectDefaultRooms[subEl.textContent.trim()] = rmEl.textContent.trim();
        });

        // 9. Activities Extraction
        appData.activities = {};
        xml.querySelectorAll("Activities_List > Activity").forEach(act => {
          const id = act.querySelector("Id") ? act.querySelector("Id").textContent.trim() : null;
          if (!id) return;

          const teacherNodes = act.querySelectorAll("Teacher");
          const teachers = [];
          teacherNodes.forEach(tn => {
            const name = tn.textContent.trim();
            if (name) teachers.push(name);
          });

          const subject = act.querySelector("Subject") ? act.querySelector("Subject").textContent.trim() : '';
          
          const studentNodes = act.querySelectorAll("Students");
          const students = [];
          studentNodes.forEach(sn => {
            const st = sn.textContent.trim();
            if (st) students.push(st);
          });

          const duration = act.querySelector("Duration") ? parseInt(act.querySelector("Duration").textContent.trim(), 10) : 1;

          appData.activities[id] = {
            id,
            teachers: teachers.length > 0 ? teachers : [''],
            subject,
            students,
            duration: isNaN(duration) || duration < 1 ? 1 : duration,
            room: '',
            day: '',
            hour: ''
          };
        });

        xml.querySelectorAll("Space_Constraints_List > ConstraintActivityPreferredRoom").forEach(rc => {
          const actId = rc.querySelector("Activity_Id") ? rc.querySelector("Activity_Id").textContent.trim() : null;
          const room = rc.querySelector("Room") ? rc.querySelector("Room").textContent.trim() : '';
          if (actId && appData.activities[actId] && room) appData.activities[actId].room = room;
        });

        xml.querySelectorAll("Time_Constraints_List > ConstraintActivityPreferredStartingTime").forEach(tc => {
          const actId = tc.querySelector("Activity_Id") ? tc.querySelector("Activity_Id").textContent.trim() : null;
          const day = tc.querySelector("Preferred_Day")?.textContent.trim() || tc.querySelector("Day")?.textContent.trim() || '';
          const hour = tc.querySelector("Preferred_Hour")?.textContent.trim() || tc.querySelector("Hour")?.textContent.trim() || '';
          if (actId && appData.activities[actId]) {
            appData.activities[actId].day = day;
            appData.activities[actId].hour = hour;
          }
        });

        xml.querySelectorAll("Time_Constraints_List > ConstraintActivitiesSameStartingTime").forEach(stc => {
          const actIdNodes = stc.querySelectorAll("Activity_Id");
          const actIds = Array.from(actIdNodes).map(n => n.textContent.trim()).filter(Boolean);
          if (actIds.length > 1) {
            const scheduled = actIds.map(id => appData.activities[id]).find(a => a && a.day && a.hour);
            if (scheduled) {
              actIds.forEach(id => {
                if (appData.activities[id] && (!appData.activities[id].day || !appData.activities[id].hour)) {
                  appData.activities[id].day = scheduled.day;
                  appData.activities[id].hour = scheduled.hour;
                }
              });
            }
          }
        });

        buildSchedulesIndex();

        const navEl = document.getElementById("navSchoolName");
        if (navEl) navEl.textContent = appData.institution;
        const cfgSchoolEl = document.getElementById("cfgSchoolName");
        if (cfgSchoolEl) cfgSchoolEl.value = appData.institution;

        populateGlobalDayFilter();
        populateDropdown();
        renderSubjectColorPickers();
        renderDaysAndSlotsEditors();
        renderCurrentView();
        showToast(`تم استيراد ${Object.keys(appData.activities).length} نشاطاً لـ ${appData.groups.length} قسماً و ${appData.teachers.length} أستاذاً بنجاح!`);
      } catch (err) {
        console.error("XML parse error:", err);
        showToast("تعذر تحليل ملف XML، يرجى التحقق من الصيغة");
      }
    }

    function populateGlobalDayFilter() {
      const select = document.getElementById('globalDayFilterSelect');
      if (!select) return;
      select.innerHTML = '<option value="ALL">جميع أيام الأسبوع (الجدول الموحد)</option>';
      appData.days.forEach(d => {
        const opt = document.createElement('option');
        opt.value = d;
        opt.textContent = `يوم ${d} فقط`;
        select.appendChild(opt);
      });
    }

    function buildSchedulesIndex() {
      appData.groupSchedules = {};
      appData.teacherSchedules = {};
      appData.roomSchedules = {};

      appData.groups.forEach(g => { appData.groupSchedules[g] = {}; });
      appData.teachers.forEach(t => { appData.teacherSchedules[t] = {}; });
      appData.rooms.forEach(r => { appData.roomSchedules[r] = {}; });

      const hourIds = appData.hours.map(h => h.id);

      function findHourIndex(targetHour) {
        if (!targetHour) return -1;
        const tTrim = targetHour.trim();
        let idx = hourIds.indexOf(tTrim);
        if (idx !== -1) return idx;

        idx = hourIds.findIndex(h => h.toLowerCase() === tTrim.toLowerCase());
        if (idx !== -1) return idx;

        const cleanTarget = tTrim.replace(/\s+/g, '');
        idx = hourIds.findIndex(h => h.replace(/\s+/g, '') === cleanTarget);
        if (idx !== -1) return idx;

        const tNum = tTrim.match(/\d+/);
        if (tNum) {
          idx = hourIds.findIndex(h => {
            const hNum = h.match(/\d+/);
            return hNum && hNum[0] === tNum[0];
          });
          if (idx !== -1) return idx;
        }
        return -1;
      }

      Object.values(appData.activities).forEach(act => {
        if (!act.day || !act.hour) return;
        
        let startHIdx = findHourIndex(act.hour);
        if (startHIdx === -1) return;

        let dayInfo = appData.dayMapping[act.day] || appData.dayMapping[act.day.trim()] || appData.dayMapping[act.day.replace(/\s+/g, '')];
        if (!dayInfo) {
          const canon = act.day.replace(/[\s\-_]*(ص|م|صباح|مساء|صباحا|مساءا|AM|PM)$/i, '').trim();
          const period = (/\bم\b|مساء|soir|afternoon|pm/i.test(act.day)) ? 'م' : 'ص';
          dayInfo = { realDay: canon, period };
        }

        const realDay = dayInfo.realDay;
        const period = dayInfo.period;
        const duration = parseInt(act.duration, 10) || 1;

        let resolvedRoom = act.room;
        if (!resolvedRoom && act.students && act.students.length === 1) {
          resolvedRoom = appData.groupHomeRooms[act.students[0]] || '';
        }
        if (!resolvedRoom && appData.subjectDefaultRooms[act.subject]) {
          resolvedRoom = appData.subjectDefaultRooms[act.subject];
        }

        for (let d = 0; d < duration; d++) {
          const currentHIdx = startHIdx + d;
          if (currentHIdx >= hourIds.length) break;
          const hourId = hourIds[currentHIdx];
          const slotKey = `${realDay} ${period}___${hourId}`;

          if (act.teachers) {
            act.teachers.forEach(tName => {
              if (!tName) return;
              if (!appData.teacherSchedules[tName]) appData.teacherSchedules[tName] = {};
              if (!appData.teacherSchedules[tName][slotKey]) appData.teacherSchedules[tName][slotKey] = [];
              const exists = appData.teacherSchedules[tName][slotKey].some(x => x.id === act.id);
              if (!exists) {
                appData.teacherSchedules[tName][slotKey].push({
                  id: act.id,
                  subject: act.subject,
                  students: act.students,
                  room: resolvedRoom,
                  subgroup: ''
                });
              }
            });
          }

          if (act.students) {
            act.students.forEach(stName => {
              const targets = resolveStudentGroups(stName);
              targets.forEach(({ group, subgroup }) => {
                if (!appData.groupSchedules[group]) appData.groupSchedules[group] = {};
                if (!appData.groupSchedules[group][slotKey]) appData.groupSchedules[group][slotKey] = [];
                const exists = appData.groupSchedules[group][slotKey].some(x => x.id === act.id && x.subgroup === subgroup);
                if (!exists) {
                  let grpRoom = resolvedRoom || appData.groupHomeRooms[group] || '';
                  appData.groupSchedules[group][slotKey].push({
                    id: act.id,
                    subject: act.subject,
                    teachers: act.teachers,
                    room: grpRoom,
                    subgroup: subgroup
                  });
                }
              });
            });
          }

          if (resolvedRoom) {
            if (!appData.roomSchedules[resolvedRoom]) appData.roomSchedules[resolvedRoom] = {};
            if (!appData.roomSchedules[resolvedRoom][slotKey]) appData.roomSchedules[resolvedRoom][slotKey] = [];
            const rExists = appData.roomSchedules[resolvedRoom][slotKey].some(x => x.id === act.id);
            if (!rExists) {
              appData.roomSchedules[resolvedRoom][slotKey].push({
                id: act.id,
                subject: act.subject,
                teachers: act.teachers,
                students: act.students
              });
            }
          }
        }
      });
    }

    function switchTab(tabId) {
      currentMode = tabId;

      document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('bg-brand-600', 'text-white', 'shadow');
        b.classList.add('text-slate-300');
      });
      const activeBtn = document.getElementById(`tabBtn-${tabId}`);
      if (activeBtn) {
        activeBtn.classList.add('bg-brand-600', 'text-white', 'shadow');
        activeBtn.classList.remove('text-slate-300');
      }

      const viewPanel = document.getElementById('viewPanel');
      const globalViewPanel = document.getElementById('globalViewPanel');
      const roomsViewPanel = document.getElementById('roomsViewPanel');
      const pointingViewPanel = document.getElementById('pointingViewPanel');
      const settingsPanel = document.getElementById('settingsPanel');
      const toolbarRow = document.getElementById('toolbarSelectionRow');

      [viewPanel, globalViewPanel, roomsViewPanel, pointingViewPanel, settingsPanel].forEach(p => {
        if (p) p.classList.add('hidden');
      });

      if (tabId === 'classes' || tabId === 'teachers') {
        if (viewPanel) viewPanel.classList.remove('hidden');
        if (toolbarRow) toolbarRow.classList.remove('hidden');
        populateDropdown();
        renderCurrentView();
      } else if (tabId === 'global') {
        if (globalViewPanel) globalViewPanel.classList.remove('hidden');
        if (toolbarRow) toolbarRow.classList.add('hidden');
        populateGlobalDayFilter();
        renderGlobalTimetable();
      } else if (tabId === 'rooms') {
        if (roomsViewPanel) roomsViewPanel.classList.remove('hidden');
        if (toolbarRow) toolbarRow.classList.add('hidden');
        renderRoomsOverview();
      } else if (tabId === 'pointing') {
        if (pointingViewPanel) pointingViewPanel.classList.remove('hidden');
        if (toolbarRow) toolbarRow.classList.add('hidden');
        initPointingSheetView();
      } else if (tabId === 'settings') {
        if (settingsPanel) settingsPanel.classList.remove('hidden');
        if (toolbarRow) toolbarRow.classList.add('hidden');
        renderSettingsEditors();
      }
    }

    function populateDropdown() {
      const select = document.getElementById('itemSelect');
      const label = document.getElementById('selectorLabel');
      if (!select) return;

      const list = currentMode === 'classes' ? appData.groups : appData.teachers;
      if (label) {
        label.innerHTML = currentMode === 'classes' 
          ? '<span class="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span> اختر القسم:' 
          : '<span class="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span> اختر الأستاذ(ة):';
      }

      select.innerHTML = '';
      list.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item;
        opt.textContent = item;
        select.appendChild(opt);
      });

      if (!currentSelectedId || !list.includes(currentSelectedId)) {
        currentSelectedId = list[0] || '';
      }
      select.value = currentSelectedId;
    }

    function handleItemSelect(val) {
      currentSelectedId = val;
      renderCurrentView();
    }

    function handleGridOrientationChange(val) {
      appData.settings.gridOrientation = val;
      const cfgSelect = document.getElementById('cfgGridOrientation');
      if (cfgSelect) cfgSelect.value = val;
      renderCurrentView();
      showToast(val === 'days-cols' ? "تم التبديل إلى هيئة: الأيام أفقياً (في الأعمدة)" : "تم التبديل إلى هيئة: الأيام رأسياً (في الأسطر)");
    }

    function navigateItem(delta) {
      const list = currentMode === 'classes' ? appData.groups : appData.teachers;
      if (!list || list.length === 0) return;
      let idx = list.indexOf(currentSelectedId);
      if (idx === -1) idx = 0;
      let nextIdx = (idx + delta + list.length) % list.length;
      currentSelectedId = list[nextIdx];
      const select = document.getElementById('itemSelect');
      if (select) select.value = currentSelectedId;
      renderCurrentView();
    }

    function filterDropdownList(query) {
      const select = document.getElementById('itemSelect');
      if (!select) return;
      const list = currentMode === 'classes' ? appData.groups : appData.teachers;
      const q = query.trim().toLowerCase();

      select.innerHTML = '';
      const filtered = list.filter(item => item.toLowerCase().includes(q));
      filtered.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item;
        opt.textContent = item;
        select.appendChild(opt);
      });

      if (filtered.length > 0) {
        currentSelectedId = filtered[0];
        select.value = currentSelectedId;
        renderCurrentView();
      }
    }

    function handleVisibilityToggle() {
      appData.settings.showTeachers = document.getElementById('showTeachersToggle')?.checked ?? true;
      appData.settings.showRooms = document.getElementById('showRoomsToggle')?.checked ?? true;
      appData.settings.showClasses = document.getElementById('showClassesToggle')?.checked ?? true;
      renderCurrentView();
    }

    function toggleInkSaver(checked) {
      appData.settings.inkSaver = checked;
      
      const t1 = document.getElementById('inkSaverToggle');
      if (t1) t1.checked = checked;
      const t2 = document.getElementById('pointingInkSaverToggle');
      if (t2) t2.checked = checked;

      if (checked) {
        document.body.classList.add('ink-saver-active');
      } else {
        document.body.classList.remove('ink-saver-active');
      }
      renderCurrentView();
      showToast(checked ? "تم تفعيل نمط توفير الحبر (أبيض وأسود اقتصادي)" : "تم إلغاء نمط توفير الحبر");
    }

    function handlePrintNUpChange(val) {
      appData.settings.printNUp = parseInt(val, 10) || 1;
    }

    function handleTemplateChange(tplId) {
      if (!tplId) return;
      appData.settings.template = tplId;
      
      const quickSel = document.getElementById('quickTemplateSelect');
      if (quickSel) quickSel.value = tplId;
      const cfgSel = document.getElementById('cfgTemplateSelect');
      if (cfgSel) cfgSel.value = tplId;
      const pointingSel = document.getElementById('pointingTemplateSelect');
      if (pointingSel) pointingSel.value = tplId;

      if (tplId === 'royal-academic') {
        appData.settings.theme = 'royal-academy';
        appData.settings.headerFont = "'Amiri', serif";
      } else if (tplId === 'tech-blueprint') {
        appData.settings.theme = 'azure-modern';
        appData.settings.headerFont = "'Fira Code', monospace";
      } else if (tplId === 'minimal-grid') {
        appData.settings.theme = 'monochrome';
        appData.settings.headerFont = "'IBM Plex Sans Arabic', sans-serif";
      } else if (tplId === 'weekly-journal') {
        appData.settings.theme = 'sahara';
        appData.settings.headerFont = "'Tajawal', sans-serif";
      } else if (tplId === 'corporate-flat') {
        appData.settings.theme = 'slate-corporate';
        appData.settings.headerFont = "'Cairo', sans-serif";
      } else if (tplId === 'vintage-parchment') {
        appData.settings.theme = 'sahara';
        appData.settings.headerFont = "'Amiri', serif";
      } else if (tplId === 'classic-dz') {
        appData.settings.theme = 'classic-dz';
      }

      renderCurrentView();
      showToast(`تم تطبيق قالب: ${getTemplateName(tplId)}`);
    }

    function getTemplateName(tplId) {
      const names = {
        'classic-dz': '1. الرسمي الجزائري الكلاسيكي',
        'modern-card': '2. العصري النيومورفي',
        'royal-academic': '3. الأكاديمي الملكي',
        'minimal-grid': '4. المينيمالي الأحادي',
        'tech-blueprint': '5. التقني الهندسي',
        'weekly-journal': '6. المفكرة المدرسية',
        'ribbon-edge': '7. الشريطي الحديث',
        'corporate-flat': '8. المؤسساتي المنبسط',
        'vintage-parchment': '9. الورقي العتيق',
        'ultra-compact': '10. المضغوط الاقتصادي الفائق'
      };
      return names[tplId] || tplId;
    }

    function getTemplateClass() {
      return `tpl-${appData.settings.template || 'classic-dz'} theme-${appData.settings.theme || 'classic-dz'}`;
    }

    function togglePaperPreviewMode() {
      isPaperPreviewModeActive = !isPaperPreviewModeActive;
      const main = document.querySelector('main');
      const btn = document.getElementById('previewModeBtn');
      if (isPaperPreviewModeActive) {
        if (main) main.classList.add('sheet-preview-mode');
        if (btn) {
          btn.classList.add('bg-brand-600', 'text-white');
          btn.classList.remove('bg-slate-800', 'text-slate-300');
        }
        showToast("تم تفعيل وضع محاكاة ورقة الطباعة A4");
      } else {
        if (main) main.classList.remove('sheet-preview-mode');
        if (btn) {
          btn.classList.remove('bg-brand-600', 'text-white');
          btn.classList.add('bg-slate-800', 'text-slate-300');
        }
        showToast("تم إلغاء وضع المعاينة والعودة للوضع العادي");
      }
    }

    function renderCurrentView() {
      if (currentMode === 'classes' || currentMode === 'teachers') {
        renderCurrentTimetable();
      } else if (currentMode === 'global') {
        renderGlobalTimetable();
      } else if (currentMode === 'rooms') {
        renderRoomsOverview();
      } else if (currentMode === 'pointing') {
        renderPointingSheetPreview();
      }
    }

    /* Rendering Grid Router: Horizontal Days (in header) vs Vertical Days (in rows) */
    function renderSelectedGrid(scheduleMap) {
      if (appData.settings.gridOrientation === 'days-rows') {
        return renderDaysInRowsGrid(scheduleMap);
      } else {
        return renderDaysInColsGrid(scheduleMap);
      }
    }

    /* Option A: Days Horizontal in Columns (Header has Days, Rows are Morning & Afternoon Hours) */
    function renderDaysInColsGrid(scheduleMap) {
      const days = appData.days;
      const hours = appData.hours;
      const isInk = appData.settings.inkSaver;

      let html = `<table class="timetable-table themed-table w-full"><thead><tr>`;
      html += `<th class="main-header w-24 py-2 text-xs font-black ${isInk ? 'bg-white text-black border-2 border-black' : ''}">الحصة / التوقيت</th>`;

      days.forEach(d => {
        html += `<th class="main-header py-2 px-1 text-xs font-black ${isInk ? 'bg-white text-black border-2 border-black' : ''}">
          <div class="font-extrabold text-sm leading-tight ${isInk ? 'text-black' : ''}">${d}</div>
        </th>`;
      });
      html += `</tr></thead><tbody>`;

      // Morning Header Row
      html += `<tr><td colspan="${days.length + 1}" class="py-1 px-3 text-xs font-black text-right ${isInk ? 'bg-slate-100 text-black border-y-2 border-black' : 'bg-emerald-950 text-emerald-200 border-y border-emerald-800'}">
        <span>🌅 الفترة الصباحية (صباحاً)</span>
      </td></tr>`;

      // Morning Slots
      hours.forEach((h, hIdx) => {
        html += `<tr>`;
        html += `<td class="sub-header py-2 font-black text-xs ${isInk ? 'bg-white text-black border-2 border-black' : 'bg-emerald-900 text-white'} whitespace-nowrap">
          <div class="font-black ${isInk ? 'text-black' : ''}">${h.label}</div>
          <div class="text-[9px] font-mono opacity-80 mt-0.5 ${isInk ? 'text-slate-800' : ''}" dir="ltr">${h.morningTime}</div>
        </td>`;

        days.forEach(day => {
          const slotKey = `${day} ص___${h.id}`;
          const items = scheduleMap[slotKey] || [];
          html += renderSlotCellHtml(items);
        });
        html += `</tr>`;
      });

      // Afternoon Header Row
      html += `<tr><td colspan="${days.length + 1}" class="py-1 px-3 text-xs font-black text-right ${isInk ? 'bg-slate-100 text-black border-y-2 border-black' : 'bg-slate-900 text-amber-200 border-y border-slate-800'}">
        <span>🌇 الفترة المسائية (مساءً)</span>
      </td></tr>`;

      // Afternoon Slots
      hours.forEach((h, hIdx) => {
        html += `<tr>`;
        html += `<td class="sub-header py-2 font-black text-xs ${isInk ? 'bg-white text-black border-2 border-black' : 'bg-slate-800 text-white'} whitespace-nowrap">
          <div class="font-black ${isInk ? 'text-black' : ''}">${h.label}</div>
          <div class="text-[9px] font-mono opacity-80 mt-0.5 ${isInk ? 'text-slate-800' : ''}" dir="ltr">${h.afternoonTime}</div>
        </td>`;

        days.forEach(day => {
          const slotKey = `${day} م___${h.id}`;
          const items = scheduleMap[slotKey] || [];
          html += renderSlotCellHtml(items);
        });
        html += `</tr>`;
      });

      html += `</tbody></table>`;
      return html;
    }

    /* Option B: Days Vertical in Rows (Side column has Days and Morning/Afternoon, Header has Hours) */
    function renderDaysInRowsGrid(scheduleMap) {
      const days = appData.days;
      const hours = appData.hours;
      const isInk = appData.settings.inkSaver;

      let html = `<table class="timetable-table themed-table w-full"><thead><tr>`;
      html += `<th class="main-header w-24 py-2 text-xs font-black ${isInk ? 'bg-white text-black border-2 border-black' : ''}">اليوم والفترة</th>`;

      hours.forEach(h => {
        html += `<th class="main-header py-2 px-1 text-xs font-black ${isInk ? 'bg-white text-black border-2 border-black' : ''}">
          <div class="font-extrabold text-[11px] leading-tight ${isInk ? 'text-black' : ''}">${h.label}</div>
          <div class="text-[9px] opacity-80 mt-0.5 font-mono ${isInk ? 'text-slate-800' : ''}" dir="ltr">${h.morningTime}</div>
        </th>`;
      });
      html += `</tr></thead><tbody>`;

      days.forEach(day => {
        // Morning Row
        html += `<tr>`;
        html += `<td class="sub-header py-2 font-black text-[11px] ${isInk ? 'bg-white text-black border-2 border-black' : 'bg-emerald-950 text-white'} whitespace-nowrap">
          <span class="block font-black ${isInk ? 'text-black' : ''}">${day}</span>
          <span class="text-[9px] font-bold ${isInk ? 'text-slate-800' : 'text-emerald-300'}">صباحاً (ص)</span>
        </td>`;

        hours.forEach(h => {
          const slotKey = `${day} ص___${h.id}`;
          const items = scheduleMap[slotKey] || [];
          html += renderSlotCellHtml(items);
        });
        html += `</tr>`;

        // Afternoon Row
        html += `<tr class="border-b-2 border-slate-300">`;
        html += `<td class="sub-header py-2 font-black text-[11px] ${isInk ? 'bg-white text-black border-2 border-black' : 'bg-slate-800 text-white'} whitespace-nowrap">
          <span class="block font-black ${isInk ? 'text-black' : ''}">${day}</span>
          <span class="text-[9px] font-bold ${isInk ? 'text-slate-800' : 'text-slate-300'}">مساءً (م)</span>
        </td>`;

        hours.forEach(h => {
          const slotKey = `${day} م___${h.id}`;
          const items = scheduleMap[slotKey] || [];
          html += renderSlotCellHtml(items);
        });
        html += `</tr>`;
      });

      html += `</tbody></table>`;
      return html;
    }

    function renderSlotCellHtml(items) {
      if (!items || items.length === 0) {
        return `<td class="p-1 bg-white text-slate-300 text-[10px] font-mono select-none">ــــ</td>`;
      }

      const isInk = appData.settings.inkSaver;

      let innerHtml = items.map(it => {
        const color = isInk ? '#ffffff' : (appData.settings.colorizeSubjects ? (appData.settings.subjectColors[it.subject] || '#047857') : '#334155');
        const textColor = isInk ? '#000000' : '#ffffff';
        const borderStyle = isInk ? 'border: 1.5px solid #000000;' : '';
        const tStr = (it.teachers && it.teachers.filter(Boolean).length) ? it.teachers.filter(Boolean).join(', ') : '';
        const cStr = (it.students && it.students.length) ? it.students.join(', ') : '';

        return `
          <div class="slot-colored p-1 rounded shadow-xs mb-0.5 last:mb-0 transition leading-tight ${isInk ? 'text-black' : 'text-white'}" style="background-color: ${color}; color: ${textColor}; ${borderStyle}">
            <div class="font-black text-[11px] break-words ${isInk ? 'text-black' : ''}" title="${it.subject}">${it.subject}</div>
            ${appData.settings.showTeachers && tStr ? `<div class="text-[9.5px] font-bold opacity-90 break-words ${isInk ? 'text-slate-800' : ''}">${tStr}</div>` : ''}
            ${appData.settings.showClasses && cStr ? `<div class="text-[9px] font-bold opacity-90 break-words ${isInk ? 'text-slate-800' : ''}">${cStr}</div>` : ''}
            <div class="flex items-center justify-between gap-1 mt-0.5">
              ${it.subgroup ? `<span class="${isInk ? 'border border-black bg-slate-100 text-black' : 'bg-black/30'} px-1 rounded text-[8px] font-mono">${it.subgroup}</span>` : '<span></span>'}
              ${appData.settings.showRooms && it.room ? `<span class="badge-room ${isInk ? 'border border-black bg-white text-black' : 'bg-white/25'} px-1 rounded text-[8.5px] font-mono font-bold" style="font-family:${appData.settings.roomFont}">${it.room}</span>` : ''}
            </div>
          </div>
        `;
      }).join('');

      return `<td class="p-1 align-top bg-white border border-slate-200">${innerHtml}</td>`;
    }

    function renderOfficialHeaderHtml(titleSuffix, isClass) {
      const s = appData.settings;
      const showIntro = isClass ? s.showIntroClasses : s.showIntroTeachers;

      return `
        <div class="timetable-header-block mb-2 select-none">
          <div class="flex items-center justify-between text-[11px] sm:text-xs font-black text-slate-800 border-b border-slate-300 pb-1 mb-1">
            <span>${s.republic}</span>
            <span>${s.ministry}</span>
          </div>

          <div class="flex items-center justify-between text-[9.5px] sm:text-[10.5px] font-bold text-slate-600 mb-2">
            <span>🏛️ ${s.directorate}</span>
            <span class="font-extrabold text-slate-900 text-xs sm:text-sm header-logo-text">🏫 ${s.schoolName}</span>
            <span>📅 السنة الدراسية: ${s.schoolYear}</span>
          </div>

          <div class="text-center my-1">
            <span class="header-doc-title inline-block bg-slate-900 text-white font-black text-xs sm:text-sm py-1 px-4 rounded-lg shadow-sm tracking-wide">
              ${s.docTitle} ــــ <strong class="underline">${titleSuffix}</strong>
            </span>
          </div>

          ${showIntro && s.introText ? `
            <div class="header-intro text-center text-[10px] sm:text-[11px] text-slate-600 italic mt-1 font-medium max-w-3xl mx-auto leading-tight">
              "${s.introText}"
            </div>
          ` : ''}
        </div>
      `;
    }

    function renderOfficialFooterHtml(qrId) {
      const s = appData.settings;
      return `
        <div class="timetable-footer-block mt-2 pt-1.5 border-t border-slate-300 flex items-center justify-between text-xs select-none">
          <div class="flex items-center gap-2">
            <div id="${qrId}" class="qr-box p-1 border-2 border-slate-800 rounded-lg bg-white flex items-center justify-center shadow-sm"></div>
            <div class="text-right">
              <span class="block font-bold text-[9px] text-slate-500">للمعاينة والمتابعة عبر الهاتف:</span>
              <span class="font-mono text-[9.5px] font-black text-brand-700 block" dir="ltr">fetprint.fetsync.org</span>
            </div>
          </div>

          <div class="text-center max-w-xs text-[9px] text-slate-500 font-medium">
            <div>${s.footerNote}</div>
            <div class="mt-0.5 font-bold text-slate-600">منظومة FET Universal Pro V3.2</div>
          </div>

          <div class="stamp-box text-center min-w-[130px] border border-dashed border-slate-300 rounded p-1.5 bg-slate-50/50">
            <div class="text-[9.5px] font-bold text-slate-700">${s.stampLabel}</div>
            <div class="text-[10px] font-black text-slate-900 mt-0.5 underline">${s.directorLabel}</div>
            <div class="h-6"></div>
          </div>
        </div>
      `;
    }

    function getDirectUrl(type, id) {
      const slug = appData.settings.projectSlug || 'default';
      const safe = encodeURIComponent(id).replace(/%/g, '_');
      return `https://fetprint.fetsync.org/${slug}/${type === 'group' ? 'classes' : 'teachers'}/${safe}.html`;
    }

    function renderCurrentTimetable() {
      const container = document.getElementById('timetableSingleCard');
      if (!container) return;

      if (!currentSelectedId) {
        container.innerHTML = `
          <div class="text-center py-20 text-slate-400">
            <span class="text-4xl block mb-3 opacity-50">📂</span>
            <span class="font-bold text-sm tracking-wide">لا توجد بيانات متاحة للعرض. يرجى اختيار قسم أو أستاذ، أو استيراد ملف FET.</span>
          </div>
        `;
        return;
      }

      const isClass = currentMode === 'classes';
      const scheduleMap = isClass ? (appData.groupSchedules[currentSelectedId] || {}) : (appData.teacherSchedules[currentSelectedId] || {});
      const titleSuffix = isClass ? `جدول توقيت القسم: ${currentSelectedId}` : `جدول توقيت الأستاذ(ة): ${currentSelectedId}`;
      const qrId = `qr_live_${Date.now()}`;
      const gridHtml = renderSelectedGrid(scheduleMap);
      const tplClass = getTemplateClass();

      container.className = `a4-sheet-canvas bg-white rounded-2xl shadow-paper border border-slate-200 p-5 sm:p-6 transition-all mx-auto max-w-full overflow-hidden ${tplClass}`;
      container.innerHTML = `
        ${renderOfficialHeaderHtml(titleSuffix, isClass)}
        <div class="overflow-x-auto my-1.5 custom-scrollbar rounded shadow-sm">${gridHtml}</div>
        ${renderOfficialFooterHtml(qrId)}
      `;

      const targetUrl = getDirectUrl(isClass ? 'group' : 'teacher', currentSelectedId);
      setTimeout(() => {
        const qrEl = document.getElementById(qrId);
        if (qrEl) {
          qrEl.innerHTML = '';
          new QRCode(qrEl, {
            text: targetUrl, width: 100, height: 100,
            colorDark: "#0f172a", colorLight: "#ffffff", correctLevel: QRCode.CorrectLevel.M
          });
        }
      }, 40);
    }

    function applyDynamicPrintStyles(isPortrait) {
      const styleEl = document.getElementById('dynamicPrintStyle');
      if (!styleEl) return;
      if (isPortrait) {
        styleEl.innerHTML = `@page { size: A4 portrait; margin: 4mm; }`;
        document.body.classList.remove('print-landscape');
        document.body.classList.add('print-portrait');
      } else {
        styleEl.innerHTML = `@page { size: A4 landscape; margin: 4.5mm; }`;
        document.body.classList.remove('print-portrait');
        document.body.classList.add('print-landscape');
      }
    }

    function cleanupPrintPipeline() {
      document.body.classList.remove('printing-all-mode', 'printing-global-mode', 'printing-rooms-mode', 'printing-pointing-mode');
      const container = document.getElementById('printAllContainer');
      if (container) {
        container.innerHTML = '';
        container.className = 'hidden w-full m-0 p-0';
      }
    }

    function printCurrentTable() {
      if (!currentSelectedId) {
        showToast("يرجى اختيار عنصر أولاً!");
        return;
      }
      const isPortrait = appData.settings.pageOrientation === 'portrait';
      applyDynamicPrintStyles(isPortrait);

      const printContainer = document.getElementById('printAllContainer');
      if (!printContainer) return;
      printContainer.innerHTML = '';
      
      const a4Page = document.createElement('div');
      a4Page.className = 'a4-print-page layout-nup-1';
      
      const isClass = currentMode === 'classes';
      const scheduleMap = isClass ? (appData.groupSchedules[currentSelectedId] || {}) : (appData.teacherSchedules[currentSelectedId] || {});
      const titleSuffix = isClass ? `جدول توقيت القسم: ${currentSelectedId}` : `جدول توقيت الأستاذ(ة): ${currentSelectedId}`;
      const qrId = `qr_print_single_${Date.now()}`;
      const gridHtml = renderSelectedGrid(scheduleMap);
      const tplClass = getTemplateClass();

      const itemDiv = document.createElement('div');
      itemDiv.className = `print-sheet-item ${tplClass}`;
      itemDiv.innerHTML = `
        ${renderOfficialHeaderHtml(titleSuffix, isClass)}
        <div class="overflow-hidden my-0.5 flex-1">${gridHtml}</div>
        ${renderOfficialFooterHtml(qrId)}
      `;
      a4Page.appendChild(itemDiv);
      printContainer.appendChild(a4Page);

      const qrTargetUrl = getDirectUrl(isClass ? 'group' : 'teacher', currentSelectedId);
      setTimeout(() => {
        const qrEl = document.getElementById(qrId);
        if (qrEl) {
          qrEl.innerHTML = '';
          new QRCode(qrEl, {
            text: qrTargetUrl, width: 88, height: 88,
            colorDark: "#0f172a", colorLight: "#ffffff", correctLevel: QRCode.CorrectLevel.M
          });
        }
      }, 30);

      document.body.classList.remove('printing-global-mode', 'printing-rooms-mode', 'printing-pointing-mode');
      document.body.classList.add('printing-all-mode');
      printContainer.className = 'w-full block';

      showToast("جاري إعداد نافذة الطباعة...");
      window.focus();
      setTimeout(() => {
        window.print();
        window.addEventListener('afterprint', cleanupPrintPipeline, { once: true });
        setTimeout(cleanupPrintPipeline, 2000);
      }, 350);
    }

    function printAllCurrentType() {
      const list = currentMode === 'classes' ? appData.groups : appData.teachers;
      if (!list || list.length === 0) {
        showToast("لا توجد عناصر متاحة للطباعة!");
        return;
      }

      const printContainer = document.getElementById('printAllContainer');
      if (!printContainer) return;
      printContainer.innerHTML = '';
      
      const isClass = currentMode === 'classes';
      const nUp = parseInt(appData.settings.printNUp, 10) || 1;
      const tplClass = getTemplateClass();
      const isPortrait = appData.settings.pageOrientation === 'portrait';

      applyDynamicPrintStyles(isPortrait);

      const chunks = [];
      for (let i = 0; i < list.length; i += nUp) {
        chunks.push(list.slice(i, i + nUp));
      }

      const qrRenderQueue = [];

      chunks.forEach((chunk, pageIndex) => {
        const a4Page = document.createElement('div');
        a4Page.className = `a4-print-page layout-nup-${nUp}`;

        chunk.forEach((item, itemIndex) => {
          const globalIdx = pageIndex * nUp + itemIndex;
          const scheduleMap = isClass ? (appData.groupSchedules[item] || {}) : (appData.teacherSchedules[item] || {});
          const titleSuffix = isClass ? `جدول توقيت القسم: ${item}` : `جدول توقيت الأستاذ(ة): ${item}`;
          const qrId = `qr_print_${globalIdx}_${Date.now()}`;
          const gridHtml = renderSelectedGrid(scheduleMap);

          const itemDiv = document.createElement('div');
          itemDiv.className = `print-sheet-item ${tplClass}`;
          itemDiv.innerHTML = `
            ${renderOfficialHeaderHtml(titleSuffix, isClass)}
            <div class="overflow-hidden my-[1px] flex-1">${gridHtml}</div>
            ${renderOfficialFooterHtml(qrId)}
          `;
          a4Page.appendChild(itemDiv);

          qrRenderQueue.push({ id: qrId, url: getDirectUrl(isClass ? 'group' : 'teacher', item), nUp });
        });

        printContainer.appendChild(a4Page);
      });

      setTimeout(() => {
        qrRenderQueue.forEach(item => {
          const qrEl = document.getElementById(item.id);
          if (qrEl) {
            qrEl.innerHTML = '';
            const qrSize = item.nUp === 1 ? 88 : (item.nUp === 2 ? 44 : 26);
            new QRCode(qrEl, {
              text: item.url, width: qrSize, height: qrSize,
              colorDark: "#0f172a", colorLight: "#ffffff", correctLevel: QRCode.CorrectLevel.M
            });
          }
        });
      }, 50);

      document.body.classList.remove('printing-global-mode', 'printing-rooms-mode', 'printing-pointing-mode');
      document.body.classList.add('printing-all-mode');
      printContainer.className = 'w-full block';
      showToast(`جاري إعداد طباعة ${list.length} جدول (${nUp} في كل ورقة A4)...`);

      window.focus();
      setTimeout(() => {
        window.print();
        window.addEventListener('afterprint', cleanupPrintPipeline, { once: true });
        setTimeout(cleanupPrintPipeline, 2500);
      }, 500);
    }

    function switchGlobalSubMode(mode) {
      globalSubMode = mode;
      ['classes_global', 'teachers_global', 'rooms_global'].forEach(m => {
        const btn = document.getElementById(`globalModeBtn-${m}`);
        if (btn) {
          if (m === mode) {
            btn.className = 'px-3 py-1.5 rounded-lg bg-brand-600 text-white shadow-sm transition font-bold';
          } else {
            btn.className = 'px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 transition font-bold';
          }
        }
      });
      renderGlobalTimetable();
    }

    function generateGlobalTableHtml(days, hours, entities, entityHeader, scheduleSource, isInk, colorize, showT, showR, showC, isRotated) {
      if (!entities || entities.length === 0) {
        return `<div class="p-8 text-center text-slate-400 font-bold">لا توجد بيانات مسجلة لعرض هذا الجدول.</div>`;
      }

      let html = `<table class="timetable-table themed-table global-print-table w-full text-center border-collapse"><thead>`;
      
      html += `<tr>`;
      html += `<th rowspan="2" class="main-header w-24 py-1.5 px-1 text-xs font-black border-r ${isInk ? 'bg-white text-black border-black' : 'border-slate-700'}">${entityHeader}</th>`;
      days.forEach(day => {
        html += `<th colspan="${hours.length * 2}" class="main-header py-1 text-xs font-black border-r ${isInk ? 'bg-white text-black border-black' : 'border-slate-700'}">يوم ${day}</th>`;
      });
      html += `</tr>`;

      html += `<tr>`;
      days.forEach(() => {
        hours.forEach((h, idx) => {
          html += `<th class="sub-header py-1 text-[9px] font-bold border-l ${isInk ? 'bg-white text-black border-black' : 'bg-emerald-900 border-emerald-950 text-white'}" title="صباح ${h.label}">ص${idx + 1}</th>`;
        });
        hours.forEach((h, idx) => {
          html += `<th class="sub-header py-1 text-[9px] font-bold border-l ${isInk ? 'bg-white text-black border-black' : 'bg-slate-800 border-slate-900 text-white'}" title="مساء ${h.label}">م${idx + 1}</th>`;
        });
      });
      html += `</tr></thead><tbody>`;

      entities.forEach((entity, rowIdx) => {
        const sched = scheduleSource[entity] || {};
        const isEven = (rowIdx % 2 === 0);

        html += `<tr class="${isInk ? 'bg-white' : (isEven ? 'bg-white' : 'bg-slate-50/40')} border-b border-slate-300 hover:bg-emerald-50/30 transition">`;
        html += `<td class="font-black text-xs ${isInk ? 'bg-white text-black border-black' : 'bg-slate-100 text-slate-900 border-slate-300'} border-r-2 py-1.5 px-2 whitespace-nowrap">${entity}</td>`;

        days.forEach(day => {
          hours.forEach(h => {
            const slotKey = `${day} ص___${h.id}`;
            const items = sched[slotKey] || [];
            html += renderGlobalCell(items, colorize, showT, showR, showC, isRotated);
          });
          hours.forEach(h => {
            const slotKey = `${day} م___${h.id}`;
            const items = sched[slotKey] || [];
            html += renderGlobalCell(items, colorize, showT, showR, showC, isRotated);
          });
        });

        html += `</tr>`;
      });

      html += `</tbody></table>`;
      return html;
    }

    function renderGlobalTimetable() {
      const container = document.getElementById('globalTimetableContent');
      if (!container) return;

      const selectedDayFilter = document.getElementById('globalDayFilterSelect')?.value || 'ALL';
      const days = (selectedDayFilter === 'ALL') ? appData.days : [selectedDayFilter];
      const hours = appData.hours;
      const isInk = appData.settings.inkSaver;
      const colorize = isInk ? false : (document.getElementById('gColorizeToggle')?.checked ?? true);
      const showT = document.getElementById('gShowTeachers')?.checked ?? true;
      const showR = document.getElementById('gShowRooms')?.checked ?? true;
      const showC = document.getElementById('gShowClasses')?.checked ?? true;
      const isRotated = document.getElementById('gRotateTextToggle')?.checked ?? true;

      let entities = [];
      let entityHeader = 'القسم / الفوج';
      let scheduleSource = appData.groupSchedules;

      if (globalSubMode === 'classes_global') {
        entities = appData.groups;
        entityHeader = 'القسم / الفوج';
        scheduleSource = appData.groupSchedules;
      } else if (globalSubMode === 'teachers_global') {
        entities = appData.teachers;
        entityHeader = 'الأستاذ(ة)';
        scheduleSource = appData.teacherSchedules;
      } else if (globalSubMode === 'rooms_global') {
        entities = appData.rooms;
        entityHeader = 'القاعة';
        scheduleSource = appData.roomSchedules;
      }

      container.innerHTML = generateGlobalTableHtml(days, hours, entities, entityHeader, scheduleSource, isInk, colorize, showT, showR, showC, isRotated);
    }

    function renderGlobalCell(items, colorize, showT, showR, showC, isRotatedOverride = null) {
      if (!items || items.length === 0) {
        return `<td class="p-0.5 border border-slate-200 text-slate-300 text-[8px] select-none">ــــ</td>`;
      }

      const isInk = appData.settings.inkSaver;
      const isRotated = (isRotatedOverride !== null) ? isRotatedOverride : (document.getElementById('gRotateTextToggle')?.checked ?? true);

      const innerCards = items.map(it => {
        const color = isInk ? '#ffffff' : (colorize ? (appData.settings.subjectColors[it.subject] || '#047857') : '#ffffff');
        const textColor = isInk ? '#000000' : (colorize ? '#ffffff' : '#000000');
        const borderStyle = isInk ? 'border: 1px solid #000000;' : (!colorize ? 'border: 1px solid #cbd5e1;' : '');
        const tStr = (it.teachers && it.teachers.filter(Boolean).length) ? it.teachers.filter(Boolean).join(', ') : '';
        const cStr = (it.students && it.students.length) ? it.students.join(', ') : '';

        if (isRotated) {
          return `
            <div class="global-print-cell-box global-rotated-cell rounded text-[8px] font-black leading-tight shadow-xs mb-0.5 last:mb-0 ${isInk ? 'text-black' : (colorize ? 'text-white' : 'text-slate-900')}" style="background-color: ${color}; color: ${textColor}; ${borderStyle}">
              <span class="font-black text-[8.5px]" title="${it.subject}">${it.subject}</span>
              ${showT && tStr ? `<span class="text-[7.5px] opacity-90 font-bold ${isInk ? 'text-slate-800' : ''}">(${tStr})</span>` : ''}
              ${showC && cStr ? `<span class="text-[7px] opacity-90 font-bold ${isInk ? 'text-slate-800' : ''}">[${cStr}]</span>` : ''}
              ${showR && it.room ? `<span class="text-[7px] font-mono ${isInk ? 'text-black' : 'opacity-90'}">${it.room}</span>` : ''}
            </div>
          `;
        }

        return `
          <div class="global-print-cell-box p-1 rounded text-[8px] sm:text-[9px] font-black leading-tight shadow-xs mb-0.5 last:mb-0 whitespace-normal break-words ${isInk ? 'text-black' : (colorize ? 'text-white' : 'text-slate-900')}" style="background-color: ${color}; color: ${textColor}; ${borderStyle}">
            <div class="font-extrabold ${isInk ? 'text-black' : ''}" title="${it.subject}">${it.subject}</div>
            ${showT && tStr ? `<div class="text-[7.5px] opacity-90 ${isInk ? 'text-slate-800' : ''}">${tStr}</div>` : ''}
            ${showC && cStr ? `<div class="text-[7.5px] opacity-90 ${isInk ? 'text-slate-800' : ''}">${cStr}</div>` : ''}
            ${showR && it.room ? `<div class="text-[7px] font-mono mt-0.5 ${isInk ? 'text-black' : 'opacity-85'}">[${it.room}]</div>` : ''}
          </div>
        `;
      }).join('');

      return `<td class="p-0.5 border border-slate-200 align-middle">${innerCards}</td>`;
    }

    function printGlobalTimetableFull() {
      applyDynamicPrintStyles(false);

      const printContainer = document.getElementById('printAllContainer');
      if (!printContainer) return;
      printContainer.innerHTML = '';

      const selectedDayFilter = document.getElementById('globalDayFilterSelect')?.value || 'ALL';
      const days = (selectedDayFilter === 'ALL') ? appData.days : [selectedDayFilter];
      const hours = appData.hours;
      const isInk = appData.settings.inkSaver;
      const colorize = isInk ? false : (document.getElementById('gColorizeToggle')?.checked ?? true);
      const showT = document.getElementById('gShowTeachers')?.checked ?? true;
      const showR = document.getElementById('gShowRooms')?.checked ?? true;
      const showC = document.getElementById('gShowClasses')?.checked ?? true;
      const isRotated = document.getElementById('gRotateTextToggle')?.checked ?? true;
      const tplClass = getTemplateClass();

      let entities = [];
      let entityHeader = 'القسم / الفوج';
      let scheduleSource = appData.groupSchedules;
      let modeTitle = "الأقسام";

      if (globalSubMode === 'classes_global') {
        entities = appData.groups;
        entityHeader = 'القسم / الفوج';
        scheduleSource = appData.groupSchedules;
        modeTitle = "الأقسام";
      } else if (globalSubMode === 'teachers_global') {
        entities = appData.teachers;
        entityHeader = 'الأستاذ(ة)';
        scheduleSource = appData.teacherSchedules;
        modeTitle = "الأساتذة";
      } else if (globalSubMode === 'rooms_global') {
        entities = appData.rooms;
        entityHeader = 'القاعة';
        scheduleSource = appData.roomSchedules;
        modeTitle = "القاعات";
      }

      if (entities.length === 0) {
        showToast("لا توجد بيانات مسجلة في هذا الجدول العام!");
        return;
      }

      // Chunk rows per page so each page fits into A4 Landscape without overflow
      const rowsPerPage = isRotated ? 6 : 9;
      const totalPages = Math.ceil(entities.length / rowsPerPage);

      for (let p = 0; p < totalPages; p++) {
        const pageEntities = entities.slice(p * rowsPerPage, (p + 1) * rowsPerPage);
        const tableHtml = generateGlobalTableHtml(days, hours, pageEntities, entityHeader, scheduleSource, isInk, colorize, showT, showR, showC, isRotated);

        const a4Page = document.createElement('div');
        a4Page.className = 'a4-print-page layout-nup-1 w-full';
        const pageNumText = totalPages > 1 ? ` (صفحة ${p + 1} من ${totalPages})` : '';

        a4Page.innerHTML = `
          <div class="print-sheet-item ${tplClass} w-full p-2.5 flex flex-col justify-between h-full">
            ${renderOfficialHeaderHtml(`الجدول العام المجمع لـ ${modeTitle} (كامل الأسبوع)${pageNumText}`, false)}
            <div class="overflow-hidden my-1 flex-1 w-full flex flex-col justify-start">${tableHtml}</div>
            ${renderOfficialFooterHtml(`qr_global_p${p}_${Date.now()}`)}
          </div>
        `;
        printContainer.appendChild(a4Page);
      }

      document.body.classList.remove('printing-all-mode', 'printing-rooms-mode', 'printing-pointing-mode');
      document.body.classList.add('printing-global-mode');
      printContainer.className = 'w-full block';

      showToast(`جاري تجهيز طباعة الجدول العام كاملاً (${totalPages} صفحة A4)...`);
      window.focus();
      setTimeout(() => {
        window.print();
        window.addEventListener('afterprint', cleanupPrintPipeline, { once: true });
        setTimeout(cleanupPrintPipeline, 2500);
      }, 450);
    }

    function printGlobalTimetableByDays() {
      applyDynamicPrintStyles(false);

      const printContainer = document.getElementById('printAllContainer');
      if (!printContainer) return;
      printContainer.innerHTML = '';

      const originalDayFilter = document.getElementById('globalDayFilterSelect')?.value;
      const tplClass = getTemplateClass();

      appData.days.forEach((day, dIdx) => {
        const daySelect = document.getElementById('globalDayFilterSelect');
        if (daySelect) daySelect.value = day;
        renderGlobalTimetable();
        const dayHtml = document.getElementById('globalTimetableContent')?.innerHTML || '';

        const a4Page = document.createElement('div');
        a4Page.className = 'a4-print-page layout-nup-1 w-full';
        a4Page.innerHTML = `
          <div class="print-sheet-item ${tplClass} w-full p-3">
            ${renderOfficialHeaderHtml(`الجدول العام المفصل ــــ يوم: ${day}`, false)}
            <div class="overflow-hidden my-1 flex-1 w-full">${dayHtml}</div>
            ${renderOfficialFooterHtml(`qr_global_day_${dIdx}_${Date.now()}`)}
          </div>
        `;
        printContainer.appendChild(a4Page);
      });

      const daySelect = document.getElementById('globalDayFilterSelect');
      if (daySelect) daySelect.value = originalDayFilter || 'ALL';
      renderGlobalTimetable();

      document.body.classList.remove('printing-all-mode', 'printing-rooms-mode', 'printing-pointing-mode');
      document.body.classList.add('printing-global-mode');
      printContainer.className = 'w-full block';

      showToast(`جاري تجهيز طباعة ${appData.days.length} صفحات (يوم بيوم مع كامل أسماء المواد)...`);
      window.focus();
      setTimeout(() => {
        window.print();
        window.addEventListener('afterprint', cleanupPrintPipeline, { once: true });
        setTimeout(cleanupPrintPipeline, 2500);
      }, 500);
    }

    function switchRoomSubView(subView) {
      roomSubMode = subView;
      const matrixContainer = document.getElementById('roomWeeklyMatrixContainer');
      const singleContainer = document.getElementById('roomSingleViewContainer');
      const btnMatrix = document.getElementById('btnPrintRoomsMatrix');
      const btnSingle = document.getElementById('btnPrintSingleRoom');
      const tabMatrix = document.getElementById('roomSubTabMatrix');
      const tabSingle = document.getElementById('roomSubTabSingle');

      if (subView === 'matrix') {
        if (matrixContainer) matrixContainer.classList.remove('hidden');
        if (singleContainer) singleContainer.classList.add('hidden');
        if (btnMatrix) btnMatrix.classList.remove('hidden');
        if (btnSingle) btnSingle.classList.add('hidden');
        if (tabMatrix) { tabMatrix.className = 'px-4 py-1.5 rounded-lg bg-brand-600 text-white shadow-sm transition font-bold'; }
        if (tabSingle) { tabSingle.className = 'px-4 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 transition font-bold'; }
        renderRoomsMatrix();
      } else {
        if (matrixContainer) matrixContainer.classList.add('hidden');
        if (singleContainer) singleContainer.classList.remove('hidden');
        if (btnMatrix) btnMatrix.classList.add('hidden');
        if (btnSingle) btnSingle.classList.remove('hidden');
        if (tabMatrix) { tabMatrix.className = 'px-4 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 transition font-bold'; }
        if (tabSingle) { tabSingle.className = 'px-4 py-1.5 rounded-lg bg-brand-600 text-white shadow-sm transition font-bold'; }
        populateRoomSelect();
      }
    }

    function renderRoomsOverview() {
      const badge = document.getElementById('totalRoomsCountBadge');
      if (badge) badge.textContent = `إجمالي القاعات: ${appData.rooms.length}`;
      switchRoomSubView(roomSubMode);
    }

    function renderRoomsMatrix() {
      const container = document.getElementById('weeklyFreeRoomsGrid');
      if (!container) return;

      if (appData.rooms.length === 0) {
        container.innerHTML = `<div class="p-8 text-center text-slate-400 font-bold">لا توجد قاعات مدخلة في ملف FET الحالي.</div>`;
        return;
      }

      const days = appData.days;
      const hours = appData.hours;

      let html = `<table class="timetable-table themed-table w-full text-center"><thead><tr>`;
      html += `<th class="main-header w-28 py-2 text-xs font-black">اليوم والفترة</th>`;
      hours.forEach(h => {
        html += `<th class="main-header py-2 text-xs font-black">
          <div>${h.label}</div>
          <div class="text-[8px] font-mono opacity-80" dir="ltr">${h.morningTime}</div>
        </th>`;
      });
      html += `</tr></thead><tbody>`;

      days.forEach(day => {
        ['ص', 'م'].forEach((p) => {
          html += `<tr>`;
          html += `<td class="text-xs font-bold py-2 ${p === 'ص' ? 'bg-emerald-50 text-emerald-950' : 'bg-slate-50 text-slate-900'}">
            <span class="font-black">${day}</span> (${p === 'ص' ? 'صباح' : 'مساء'})
          </td>`;

          hours.forEach(h => {
            const slotKey = `${day} ${p}___${h.id}`;
            const occupiedRooms = [];
            Object.entries(appData.roomSchedules).forEach(([rName, sched]) => {
              if (sched[slotKey] && sched[slotKey].length > 0) {
                occupiedRooms.push(rName);
              }
            });

            const freeRooms = appData.rooms.filter(r => !occupiedRooms.includes(r));

            html += `<td class="p-1.5 align-top bg-white border border-slate-200 text-right">`;
            if (freeRooms.length === 0) {
              html += `<span class="text-[9px] text-rose-500 font-bold block text-center">مشغولة كلياً</span>`;
            } else {
              html += `<div class="flex flex-wrap gap-1 justify-center">`;
              freeRooms.forEach(fr => {
                html += `<span class="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-1.5 py-0.5 rounded border border-emerald-300">${fr}</span>`;
              });
              html += `</div>`;
            }
            html += `</td>`;
          });
          html += `</tr>`;
        });
      });

      html += `</tbody></table>`;
      container.innerHTML = html;
    }

    function populateRoomSelect() {
      const select = document.getElementById('roomSelect');
      if (!select) return;
      select.innerHTML = '';
      appData.rooms.forEach(r => {
        const opt = document.createElement('option');
        opt.value = r;
        opt.textContent = r;
        select.appendChild(opt);
      });
      if (appData.rooms.length > 0) {
        select.value = appData.rooms[0];
        renderRoomTimetable(appData.rooms[0]);
      }
    }

    function renderRoomTimetable(roomName) {
      const container = document.getElementById('roomTimetableContainer');
      if (!container || !roomName) return;
      const sched = appData.roomSchedules[roomName] || {};
      container.innerHTML = renderSelectedGrid(sched);
    }

    function printRoomsMatrix() {
      applyDynamicPrintStyles(false);
      document.body.classList.remove('printing-all-mode', 'printing-global-mode', 'printing-pointing-mode');
      document.body.classList.add('printing-rooms-mode');

      showToast("جاري تجهيز طباعة جدول الشغور...");
      window.focus();
      setTimeout(() => {
        window.print();
        window.addEventListener('afterprint', cleanupPrintPipeline, { once: true });
        setTimeout(cleanupPrintPipeline, 2000);
      }, 350);
    }

    function printSingleRoom() {
      const room = document.getElementById('roomSelect')?.value;
      if (!room) {
        showToast("يرجى اختيار قاعة أولاً!");
        return;
      }
      const sched = appData.roomSchedules[room] || {};
      applyDynamicPrintStyles(false);
      const printContainer = document.getElementById('printAllContainer');
      if (!printContainer) return;
      printContainer.innerHTML = '';

      const a4Page = document.createElement('div');
      a4Page.className = 'a4-print-page layout-nup-1';
      const itemDiv = document.createElement('div');
      itemDiv.className = `print-sheet-item ${getTemplateClass()}`;
      itemDiv.innerHTML = `
        ${renderOfficialHeaderHtml(`جدول استعمال القاعة: ${room}`, false)}
        <div class="overflow-hidden my-0.5 flex-1">${renderSelectedGrid(sched)}</div>
        ${renderOfficialFooterHtml(`qr_room_${Date.now()}`)}
      `;
      a4Page.appendChild(itemDiv);
      printContainer.appendChild(a4Page);

      document.body.classList.remove('printing-all-mode', 'printing-global-mode', 'printing-pointing-mode');
      document.body.classList.add('printing-rooms-mode');
      printContainer.className = 'w-full block';

      showToast(`جاري إعداد طباعة القاعة: ${room}...`);
      window.focus();
      setTimeout(() => {
        window.print();
        window.addEventListener('afterprint', cleanupPrintPipeline, { once: true });
        setTimeout(cleanupPrintPipeline, 2000);
      }, 350);
    }

    function getSortedClassesForPointing() {
      const groups = [...appData.groups];
      return groups.sort((a, b) => {
        const numA = (a.match(/\d+/) || [0])[0];
        const numB = (b.match(/\d+/) || [0])[0];
        const intA = parseInt(numA, 10) || 0;
        const intB = parseInt(numB, 10) || 0;
        if (intA !== intB) {
          return intB - intA;
        }
        return a.localeCompare(b, 'ar', { numeric: true });
      });
    }

    function handlePointingOrientationChange(val) {
      appData.settings.pointingOrientation = val;
      renderPointingSheetPreview();
      showToast(val === 'portrait' ? "تم ضبط الورقة الدوارة على الاتجاه العمودي (Portrait)" : "تم ضبط الورقة الدوارة على الاتجاه الأفقي (Landscape)");
    }

    function initPointingSheetView() {
      const select = document.getElementById('pointingPeriodSelect');
      if (!select) return;
      select.innerHTML = '';
      const periods = [];
      appData.days.forEach(day => {
        periods.push(`${day} ص`);
        periods.push(`${day} م`);
      });
      periods.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p;
        opt.textContent = p;
        select.appendChild(opt);
      });
      if (!currentPointingPeriodKey || !periods.includes(currentPointingPeriodKey)) {
        currentPointingPeriodKey = periods[0] || '';
      }
      select.value = currentPointingPeriodKey;

      const layoutSelect = document.getElementById('pointingPageLayoutSelect');
      if (layoutSelect) layoutSelect.value = appData.settings.pointingPageLayout || '1page';
      const orientSelect = document.getElementById('pointingOrientationSelect');
      if (orientSelect) orientSelect.value = appData.settings.pointingOrientation || 'landscape';

      renderPointingSheetPreview();
    }

    function getPointingPageChunks(totalClasses, layout) {
      if (layout === '2page' && totalClasses.length > 1) {
        const half = Math.ceil(totalClasses.length / 2);
        return [
          { classes: totalClasses.slice(0, half), startIdx: 1, pageLabel: 'الصفحة 1 من 2' },
          { classes: totalClasses.slice(half), startIdx: half + 1, pageLabel: 'الصفحة 2 من 2' }
        ];
      } else if (layout === '3page' && totalClasses.length > 2) {
        const third = Math.ceil(totalClasses.length / 3);
        return [
          { classes: totalClasses.slice(0, third), startIdx: 1, pageLabel: 'الصفحة 1 من 3' },
          { classes: totalClasses.slice(third, third * 2), startIdx: third + 1, pageLabel: 'الصفحة 2 من 3' },
          { classes: totalClasses.slice(third * 2), startIdx: third * 2 + 1, pageLabel: 'الصفحة 3 من 3' }
        ];
      }
      return [{ classes: totalClasses, startIdx: 1, pageLabel: '' }];
    }

    function handlePointingDisplayToggle() {
      appData.settings.pointingShowSubjects = document.getElementById('pointingShowSubjectsToggle')?.checked ?? true;
      appData.settings.pointingShowTeachers = document.getElementById('pointingShowTeachersToggle')?.checked ?? true;
      appData.settings.pointingShowRooms = document.getElementById('pointingShowRoomsToggle')?.checked ?? true;
      appData.settings.pointingShowSignatures = document.getElementById('pointingShowSignToggle')?.checked ?? true;
      renderPointingSheetPreview();
    }

    function generatePointingSheetHtml(periodKey, isPrint = false, pageChunk = null) {
      const parts = periodKey.split(' ');
      const day = parts[0] || 'الأحد';
      const period = parts[1] || 'ص';
      const isMorning = (period === 'ص');
      const periodTitle = isMorning ? 'الفترة الصباحية (08:00 - 12:00)' : 'الفترة المسائية (13:30 - 17:30)';
      
      const s = appData.settings;
      const isInk = s.inkSaver;
      const allSortedClasses = getSortedClassesForPointing();
      const sortedClasses = (pageChunk && pageChunk.classes) ? pageChunk.classes : allSortedClasses;
      const startNum = (pageChunk && pageChunk.startIdx) ? pageChunk.startIdx : 1;
      const pageInfo = (pageChunk && pageChunk.pageLabel) ? ` (${pageChunk.pageLabel})` : '';

      const showSubj = s.pointingShowSubjects ?? true;
      const showTeach = s.pointingShowTeachers ?? true;
      const showRm = s.pointingShowRooms ?? true;
      const showSign = s.pointingShowSignatures ?? true;

      const hours = appData.hours;
      const sheetTitle = s.pointingTitle || "ورقة الحضور اليومي وتأشيرة الأساتذة (الورقة الدوارة)";
      const adminLabel = s.pointingAdminLabel || "مستشار(ة) التربية";
      const supervisorLabel = s.pointingSupervisorLabel || "المشرف(ة) المكلف(ة) بالجناح";
      const tplClass = getTemplateClass();

      const classCount = sortedClasses.length || 1;
      let padClass = "p-1";
      let absenceClass = "text-[7.5px]";
      let teacherSubClass = "text-[8.5px]";
      let subDetailClass = "text-[7px]";
      let numColWidth = "w-6";
      let classColWidth = "w-28";

      if (classCount > 20) {
        padClass = "p-[1px]";
        absenceClass = "text-[6px]";
        teacherSubClass = "text-[7px]";
        subDetailClass = "text-[5.5px]";
        numColWidth = "w-5";
        classColWidth = "w-24";
      } else if (classCount > 14) {
        padClass = "p-[1.5px]";
        absenceClass = "text-[6.5px]";
        teacherSubClass = "text-[7.5px]";
        subDetailClass = "text-[6px]";
        numColWidth = "w-5";
        classColWidth = "w-26";
      }

      let html = `
        <div class="print-sheet-item pointing-sheet-wrapper w-full h-full flex flex-col justify-between bg-white text-slate-900 select-none ${tplClass} ${isInk ? 'ink-saver-active' : ''}">
          
          <div class="pointing-header-block border-b-2 ${isInk ? 'border-black' : 'border-slate-900'} pb-0.5 mb-0.5 text-center leading-tight">
            <div class="flex items-center justify-between px-2">
              <div class="text-[9.5px] sm:text-xs font-black text-slate-800">${s.republic}</div>
              <div class="text-[9.5px] sm:text-xs font-black text-slate-800">${s.ministry}</div>
            </div>
            <div class="flex items-center justify-between text-[8px] sm:text-[9px] font-bold text-slate-600 mt-0.5 px-2">
              <span>🏛️ ${s.directorate}</span>
              <span class="font-extrabold text-slate-900 text-xs">🏫 ${s.schoolName}</span>
              <span>📅 السنة الدراسية: ${s.schoolYear}</span>
            </div>
            <div class="mt-0.5 flex items-center justify-between py-1 px-3 rounded-lg pointing-header-row ${isInk ? 'bg-white text-black border-2 border-black' : 'bg-slate-900 text-white shadow-sm'}">
              <span class="font-black text-xs sm:text-sm tracking-wide pointing-doc-title ${isInk ? 'text-black' : ''}">📝 ${sheetTitle}${pageInfo}</span>
              <span class="font-black text-xs px-2.5 py-0.5 rounded pointing-period-badge ${isInk ? 'bg-white text-black border border-black' : 'bg-brand-600 text-white shadow-sm'}">
                يوم: <strong class="underline">${day}</strong> ــــ ${periodTitle}
              </span>
            </div>
          </div>

          <div class="w-full flex-1 pointing-table-container overflow-hidden my-0.5 flex flex-col">
            <table class="pointing-table w-full border-collapse border ${isInk ? 'border-black' : 'border-slate-800'} text-center flex-1" style="table-layout: fixed; height: 100%;">
              <thead>
                <tr class="${isInk ? 'bg-white text-black border-b-2 border-black' : 'bg-slate-800 text-white'} text-[9px]">
                  <th class="border ${isInk ? 'border-black' : 'border-slate-800'} py-0.5 px-0.5 ${numColWidth} font-black">N°</th>
                  <th class="border ${isInk ? 'border-black' : 'border-slate-800'} py-0.5 px-1 ${classColWidth} font-black">
                    <div class="font-black text-[9.5px]">القسم / الفوج</div>
                    <div class="text-[7.5px] font-bold opacity-90 mt-0.5 text-amber-200">غيابات سابقة</div>
                  </th>
                  ${hours.map((hr) => `
                    <th class="border ${isInk ? 'border-black' : 'border-slate-800'} py-0.5 px-1 font-black">
                      <div class="text-[9px] leading-tight ${isInk ? 'text-black' : ''}">${hr.label}</div>
                      <div class="text-[7px] font-mono mt-0.5 ${isInk ? 'text-slate-800' : 'opacity-80'}" dir="ltr">${isMorning ? hr.morningTime : hr.afternoonTime}</div>
                    </th>
                  `).join('')}
                  <th class="border ${isInk ? 'border-black' : 'border-slate-800'} py-0.5 px-1 w-20 font-black text-[8px]">التحرير الإداري والملاحظات</th>
                </tr>
              </thead>
              <tbody style="height: 100%;">
      `;

      sortedClasses.forEach((grp, idx) => {
        const sched = appData.groupSchedules[grp] || {};
        const isEven = (idx % 2 === 0);
        const rowBg = isInk ? 'bg-white' : (isEven ? 'bg-white' : 'bg-slate-50/50');
        const borderColor = isInk ? 'border-black' : 'border-slate-400';

        html += `
          <tr class="${rowBg} border-b ${isInk ? 'border-black' : 'border-slate-300'}" style="height: ${Math.floor(100 / classCount)}%;">
            <td class="border ${borderColor} ${padClass} font-bold font-mono text-[8px] ${isInk ? 'bg-white text-black' : 'bg-slate-100/70 text-slate-700'}">${startNum + idx}</td>
            <td class="border ${borderColor} ${padClass} align-top font-black text-slate-900 ${isInk ? 'bg-white text-black' : 'bg-slate-100/50'} text-[9.5px]">
              <div class="flex flex-col justify-between h-full p-0.5">
                <div class="font-black text-slate-900 text-center border-b border-slate-300 pb-0.5 mb-1 ${isInk ? 'border-black' : ''}">${grp}</div>
                <!-- Box for previous absences -->
                <div class="mt-auto border border-dashed ${isInk ? 'border-black bg-white' : 'border-amber-400/90 bg-amber-50/40'} rounded p-0.5 text-right">
                  <div class="text-[7px] font-bold ${isInk ? 'text-black' : 'text-amber-900'} leading-none flex items-center justify-between">
                    <span>غيابات سابقة:</span>
                    <span class="w-7 h-2 border-b border-dotted ${isInk ? 'border-black' : 'border-amber-500'} inline-block"></span>
                  </div>
                  <div class="h-2.5 sm:h-3"></div>
                </div>
              </div>
            </td>
        `;

        hours.forEach(hr => {
          const slotKey = `${day} ${period}___${hr.id}`;
          const items = sched[slotKey] || [];

          if (items.length === 0) {
            html += `
              <td class="border ${borderColor} ${padClass} align-top bg-white text-slate-400">
                <div class="h-full flex flex-col justify-between p-0.5 pointing-cell-inner">
                  <div class="${absenceClass} font-bold text-slate-400 text-right flex items-center justify-between border-b border-dashed border-slate-200 pb-[1px]">
                    <span>الغيابات:</span>
                    <span class="w-8 sm:w-10 h-2 border-b border-dotted border-slate-300"></span>
                  </div>
                  <div class="flex-1 min-h-[14px]"></div>
                  <div class="${subDetailClass} text-slate-300 font-mono italic text-center">فراغ</div>
                </div>
              </td>
            `;
          } else {
            const it = items[0];
            const teachersStr = (it.teachers && it.teachers.filter(Boolean).length) ? it.teachers.filter(Boolean).join(', ') : 'ــــ';
            const roomStr = it.room ? `[${it.room}]` : '';

            html += `
              <td class="border ${borderColor} ${padClass} align-top bg-white leading-tight">
                <div class="h-full flex flex-col justify-between text-right p-0.5 pointing-cell-inner relative">
                  
                  <!-- Top: Absent Students Area with ample writing space -->
                  <div class="${absenceClass} font-black ${isInk ? 'text-black' : 'text-rose-700'} border-b border-dashed ${isInk ? 'border-slate-400' : 'border-slate-300'} pb-[1px]">
                    <div class="flex items-center justify-between">
                      <span>الغيابات:</span>
                      <span class="w-12 sm:w-16 h-2 border-b border-dotted ${isInk ? 'border-black' : 'border-slate-400'} inline-block"></span>
                    </div>
                  </div>

                  <!-- Free middle space for absent names/notes -->
                  <div class="flex-1 min-h-[16px] sm:min-h-[22px] py-0.5">
                    <div class="border-b border-dotted ${isInk ? 'border-slate-300' : 'border-slate-200'} h-2.5 sm:h-3"></div>
                  </div>

                  <!-- Bottom Info & Teacher Signature Square -->
                  <div class="pt-[1px] border-t border-slate-200 flex items-end justify-between gap-1">
                    
                    <!-- Subject and Teacher Details (Conditional) -->
                    <div class="flex-1 ${teacherSubClass} text-slate-900 overflow-hidden">
                      ${showSubj ? `<div class="font-extrabold ${isInk ? 'text-black' : 'text-brand-900'} truncate" title="${it.subject}">${it.subject}</div>` : ''}
                      ${showTeach ? `<div class="${isInk ? 'text-slate-800' : 'text-slate-600'} ${subDetailClass} font-bold truncate" title="${teachersStr}">${teachersStr}</div>` : ''}
                      ${showRm && it.room ? `<div class="${subDetailClass} font-mono ${isInk ? 'text-black' : 'text-slate-500'}">[${it.room}]</div>` : ''}
                    </div>

                    <!-- Teacher Signature Square -->
                    ${showSign ? `
                      <div class="w-8 sm:w-9 h-7 sm:h-8 border ${isInk ? 'border-black bg-white' : 'border-slate-400 bg-slate-50/70'} rounded flex flex-col items-center justify-between p-[1px] flex-shrink-0" title="مربع إمضاء الأستاذ">
                        <span class="text-[5.5px] font-bold ${isInk ? 'text-black' : 'text-slate-600'} leading-none">إمضاء</span>
                        <div class="w-full flex-1"></div>
                      </div>
                    ` : ''}

                  </div>

                </div>
              </td>
            `;
          }
        });

        html += `
            <td class="border ${borderColor} p-0.5 text-[7px] text-slate-400 bg-white">
              <div class="h-full"></div>
            </td>
          </tr>
        `;
      });

      html += `
              </tbody>
            </table>
          </div>

          <div class="mt-0.5 pt-0.5 border-t-2 ${isInk ? 'border-black' : 'border-slate-800'} flex items-center justify-between text-[8px] font-bold text-slate-800 px-3">
            <div class="text-center min-w-[110px]">
              <div>${supervisorLabel}</div>
              <div class="h-4 sm:h-5 border border-dashed ${isInk ? 'border-black' : 'border-slate-300'} rounded mt-0.5 bg-white flex items-center justify-center text-[7px] text-slate-400 italic">
                (التأشيرة والاسم)
              </div>
            </div>

            <div class="text-center text-[7px] text-slate-500 font-mono">
              <div>تاريخ الطباعة: ${new Date().toLocaleDateString('ar-DZ')}</div>
              <div class="font-bold text-slate-700 mt-0.5">منظومة FET Cloud Pro V3.2 Universal</div>
            </div>

            <div class="text-center min-w-[110px]">
              <div>${adminLabel}</div>
              <div class="h-4 sm:h-5 border border-dashed ${isInk ? 'border-black' : 'border-slate-300'} rounded mt-0.5 bg-white flex items-center justify-center text-[7px] text-slate-400 italic">
                (التوقيع والملاحظات)
              </div>
            </div>
          </div>

        </div>
      `;

      return html;
    }

    function renderPointingSheetPreview() {
      const select = document.getElementById('pointingPeriodSelect');
      const container = document.getElementById('pointingSheetPreview');
      if (!select || !container) return;

      currentPointingPeriodKey = select.value;
      if (!currentPointingPeriodKey) return;

      const layout = document.getElementById('pointingPageLayoutSelect')?.value || '1page';
      appData.settings.pointingPageLayout = layout;

      const sortedClasses = getSortedClassesForPointing();
      const chunks = getPointingPageChunks(sortedClasses, layout);

      container.innerHTML = generatePointingSheetHtml(currentPointingPeriodKey, false, chunks[0]);
    }

    function printCurrentPointingSheet() {
      const select = document.getElementById('pointingPeriodSelect');
      if (!select || !select.value) {
        showToast("يرجى اختيار فترة أولاً!");
        return;
      }

      const isPortrait = (appData.settings.pointingOrientation === 'portrait');
      applyDynamicPrintStyles(isPortrait);

      const printContainer = document.getElementById('printAllContainer');
      if (!printContainer) return;
      printContainer.innerHTML = '';

      const layout = document.getElementById('pointingPageLayoutSelect')?.value || '1page';
      const sortedClasses = getSortedClassesForPointing();
      const chunks = getPointingPageChunks(sortedClasses, layout);

      chunks.forEach(chunk => {
        const a4Page = document.createElement('div');
        a4Page.className = 'a4-print-page';
        a4Page.innerHTML = generatePointingSheetHtml(select.value, true, chunk);
        printContainer.appendChild(a4Page);
      });

      document.body.classList.remove('printing-all-mode', 'printing-global-mode', 'printing-rooms-mode');
      document.body.classList.add('printing-pointing-mode');
      printContainer.className = 'w-full block';

      showToast(`جاري إعداد طباعة ورقة الحضور (${chunks.length} صفحات - ${isPortrait ? 'عمودي' : 'أفقي'})...`);
      window.focus();
      setTimeout(() => {
        window.print();
        window.addEventListener('afterprint', cleanupPrintPipeline, { once: true });
        setTimeout(cleanupPrintPipeline, 1500);
      }, 350);
    }

    function printAllPointingSheets() {
      const periods = [];
      appData.days.forEach(day => {
        periods.push(`${day} ص`);
        periods.push(`${day} م`);
      });

      if (periods.length === 0) {
        showToast("لا توجد فترات مسجلة للطباعة!");
        return;
      }

      const isPortrait = (appData.settings.pointingOrientation === 'portrait');
      applyDynamicPrintStyles(isPortrait);

      const printContainer = document.getElementById('printAllContainer');
      if (!printContainer) return;
      printContainer.innerHTML = '';

      const layout = document.getElementById('pointingPageLayoutSelect')?.value || '1page';
      const sortedClasses = getSortedClassesForPointing();
      const chunks = getPointingPageChunks(sortedClasses, layout);

      periods.forEach(pKey => {
        chunks.forEach(chunk => {
          const a4Page = document.createElement('div');
          a4Page.className = 'a4-print-page';
          a4Page.innerHTML = generatePointingSheetHtml(pKey, true, chunk);
          printContainer.appendChild(a4Page);
        });
      });

      document.body.classList.remove('printing-all-mode', 'printing-global-mode', 'printing-rooms-mode');
      document.body.classList.add('printing-pointing-mode');
      printContainer.className = 'w-full block';

      showToast(`جاري إعداد طباعة ${periods.length * chunks.length} ورقة حضور لكامل أيام الأسبوع...`);
      window.focus();
      setTimeout(() => {
        window.print();
        window.addEventListener('afterprint', cleanupPrintPipeline, { once: true });
        setTimeout(cleanupPrintPipeline, 2500);
      }, 450);
    }

    function renderDaysAndSlotsEditors() {
      const container = document.getElementById('daysSlotsEditorContainer');
      if (!container) return;

      let html = `<table class="w-full text-xs text-center border-collapse border border-slate-300 bg-white"><thead><tr class="bg-slate-100 font-black text-slate-800">`;
      html += `<th class="border border-slate-300 p-2">معرّف الحصة في FET</th>`;
      html += `<th class="border border-slate-300 p-2">المسمى الظاهر</th>`;
      html += `<th class="border border-slate-300 p-2">توقيت الصباح</th>`;
      html += `<th class="border border-slate-300 p-2">توقيت المساء</th>`;
      html += `</tr></thead><tbody>`;

      appData.hours.forEach((h, idx) => {
        html += `<tr>`;
        html += `<td class="border border-slate-300 p-2 font-mono font-bold bg-slate-50">${h.id}</td>`;
        html += `<td class="border border-slate-300 p-1"><input type="text" value="${h.label}" onchange="appData.hours[${idx}].label=this.value" class="w-full text-center text-xs p-1 border rounded font-bold"></td>`;
        html += `<td class="border border-slate-300 p-1"><input type="text" dir="ltr" value="${h.morningTime}" onchange="appData.hours[${idx}].morningTime=this.value" class="w-full text-center text-xs p-1 border rounded font-mono font-bold"></td>`;
        html += `<td class="border border-slate-300 p-1"><input type="text" dir="ltr" value="${h.afternoonTime}" onchange="appData.hours[${idx}].afternoonTime=this.value" class="w-full text-center text-xs p-1 border rounded font-mono font-bold"></td>`;
        html += `</tr>`;
      });

      html += `</tbody></table>`;
      container.innerHTML = html;
    }

    function renderSubjectColorPickers() {
      const container = document.getElementById('subjectColorsContainer');
      if (!container) return;
      container.innerHTML = '';

      const subjects = appData.subjects.length > 0 ? appData.subjects : Object.keys(DEFAULT_SUBJECT_COLORS);

      subjects.forEach(subj => {
        const color = appData.settings.subjectColors[subj] || DEFAULT_SUBJECT_COLORS[subj] || getAutoColor(subj);
        const card = document.createElement('div');
        card.className = 'flex items-center justify-between p-2 bg-slate-50 rounded-lg border border-slate-200 shadow-xs';
        card.innerHTML = `
          <span class="text-xs font-bold text-slate-800 truncate" title="${subj}">${subj}</span>
          <input type="color" value="${color}" onchange="updateSubjectColor('${subj}', this.value)" class="w-6 h-6 rounded cursor-pointer border-0 p-0 bg-transparent">
        `;
        container.appendChild(card);
      });
    }

    function updateSubjectColor(subj, color) {
      appData.settings.subjectColors[subj] = color;
      renderCurrentView();
    }

    function resetSubjectColorsToDefault() {
      appData.settings.subjectColors = { ...DEFAULT_SUBJECT_COLORS };
      renderSubjectColorPickers();
      renderCurrentView();
      showToast("تم استرجاع ألوان المواد الافتراضية");
    }

    function renderSettingsEditors() {
      renderDaysAndSlotsEditors();
      renderSubjectColorPickers();

      const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
      const setChecked = (id, val) => { const el = document.getElementById(id); if (el) el.checked = !!val; };

      setVal('cfgTemplateSelect', appData.settings.template || 'classic-dz');
      setVal('quickTemplateSelect', appData.settings.template || 'classic-dz');
      setVal('pointingTemplateSelect', appData.settings.template || 'classic-dz');
      setVal('gridOrientationSelect', appData.settings.gridOrientation || 'days-cols');
      setVal('cfgGridOrientation', appData.settings.gridOrientation || 'days-cols');

      setVal('cfgThemeSelect', appData.settings.theme || 'classic-dz');
      setVal('cfgPageOrientation', appData.settings.pageOrientation || 'landscape');
      setChecked('cfgShowIntroClasses', appData.settings.showIntroClasses);
      setChecked('cfgShowIntroTeachers', appData.settings.showIntroTeachers);
      setVal('cfgHeaderFont', appData.settings.headerFont);
      setVal('cfgRoomFont', appData.settings.roomFont);

      setVal('cfgRepText', appData.settings.republic);
      setVal('cfgMinistry', appData.settings.ministry);
      setVal('cfgDirectorate', appData.settings.directorate);
      setVal('cfgSchoolName', appData.settings.schoolName);
      setVal('cfgDocTitle', appData.settings.docTitle);
      setVal('cfgPointingTitle', appData.settings.pointingTitle);
      setVal('cfgPointingAdminLabel', appData.settings.pointingAdminLabel);
      setVal('cfgPointingSupervisorLabel', appData.settings.pointingSupervisorLabel);

      setVal('cfgSchoolYear', appData.settings.schoolYear);
      setVal('cfgIntroText', appData.settings.introText);
      setVal('cfgProjectSlug', appData.settings.projectSlug);
      setVal('cfgFooterNote', appData.settings.footerNote);
      setVal('cfgDirectorLabel', appData.settings.directorLabel);
      setVal('cfgStampLabel', appData.settings.stampLabel);
    }

    function saveAndApplySettings() {
      const getVal = id => document.getElementById(id)?.value?.trim() || '';
      const getChecked = id => document.getElementById(id)?.checked ?? false;

      appData.settings.template = getVal('cfgTemplateSelect') || 'classic-dz';
      appData.settings.gridOrientation = getVal('cfgGridOrientation') || 'days-cols';
      appData.settings.republic = getVal('cfgRepText');
      appData.settings.ministry = getVal('cfgMinistry');
      appData.settings.directorate = getVal('cfgDirectorate');
      appData.settings.schoolName = getVal('cfgSchoolName');
      appData.settings.docTitle = getVal('cfgDocTitle');
      appData.settings.pointingTitle = getVal('cfgPointingTitle');
      appData.settings.pointingAdminLabel = getVal('cfgPointingAdminLabel');
      appData.settings.pointingSupervisorLabel = getVal('cfgPointingSupervisorLabel');
      appData.settings.schoolYear = getVal('cfgSchoolYear');
      appData.settings.introText = getVal('cfgIntroText');
      appData.settings.projectSlug = getVal('cfgProjectSlug');
      appData.settings.pageOrientation = getVal('cfgPageOrientation') || 'landscape';
      appData.settings.showIntroClasses = getChecked('cfgShowIntroClasses');
      appData.settings.showIntroTeachers = getChecked('cfgShowIntroTeachers');
      appData.settings.footerNote = getVal('cfgFooterNote');
      appData.settings.directorLabel = getVal('cfgDirectorLabel');
      appData.settings.stampLabel = getVal('cfgStampLabel');
      appData.settings.headerFont = getVal('cfgHeaderFont') || "'Cairo', sans-serif";
      appData.settings.roomFont = getVal('cfgRoomFont') || "'Fira Code', monospace";
      appData.settings.theme = getVal('cfgThemeSelect') || 'classic-dz';

      appData.institution = appData.settings.schoolName;
      const navEl = document.getElementById("navSchoolName");
      if (navEl) navEl.textContent = appData.institution;

      buildSchedulesIndex();
      showToast("تم حفظ الإعدادات وتحديث النموذج بنجاح!");
      switchTab(currentMode);
    }

    function exportProjectToFile() {
      try {
        const projectPayload = {
          version: "3.2-universal",
          exportDate: new Date().toISOString(),
          institution: appData.institution,
          days: appData.days,
          dayMapping: appData.dayMapping,
          hours: appData.hours,
          teachers: appData.teachers,
          groups: appData.groups,
          rooms: appData.rooms,
          subgroupMap: appData.subgroupMap,
          groupHomeRooms: appData.groupHomeRooms,
          subjectDefaultRooms: appData.subjectDefaultRooms,
          subjects: appData.subjects,
          activities: appData.activities,
          settings: appData.settings
        };

        const jsonString = JSON.stringify(projectPayload, null, 2);
        const blob = new Blob([jsonString], { type: "application/json;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        const safeSlug = (appData.settings.projectSlug || appData.institution || "timetable-project").replace(/[\s\/\\]+/g, '_');
        link.setAttribute("href", url);
        link.setAttribute("download", `${safeSlug}.fetpro`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        showToast("✅ تم حفظ ملف المشروع (.fetpro) على جهازك بنجاح!");
      } catch (err) {
        console.error("Export error:", err);
        showToast("❌ تعذر تصدير ملف المشروع");
      }
    }

    function importProjectFromFile(event) {
      const file = event.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        try {
          const imported = JSON.parse(e.target.result);
          if (!imported || (!imported.activities && !imported.groups)) {
            showToast("❌ الملف غير صالح أو لا يحتوي على بيانات مشروع FETPro");
            return;
          }
          loadProjectDataFromObject(imported);
          showToast(`✅ تم فتح المشروع بنجاح: ${appData.institution}`);
        } catch (err) {
          console.error("Import error:", err);
          showToast("❌ تعذر قراءة ملف المشروع (صيغة JSON غير صحيحة)");
        }
      };
      reader.readAsText(file);
      event.target.value = '';
    }

    function loadProjectDataFromObject(imported) {
      if (imported.institution) appData.institution = imported.institution;
      if (imported.days && Array.isArray(imported.days)) appData.days = imported.days;
      if (imported.dayMapping) appData.dayMapping = imported.dayMapping;
      if (imported.hours && Array.isArray(imported.hours)) appData.hours = imported.hours;
      if (imported.teachers && Array.isArray(imported.teachers)) appData.teachers = imported.teachers;
      if (imported.groups && Array.isArray(imported.groups)) appData.groups = imported.groups;
      if (imported.rooms && Array.isArray(imported.rooms)) appData.rooms = imported.rooms;
      if (imported.subgroupMap) appData.subgroupMap = imported.subgroupMap;
      if (imported.groupHomeRooms) appData.groupHomeRooms = imported.groupHomeRooms;
      if (imported.subjectDefaultRooms) appData.subjectDefaultRooms = imported.subjectDefaultRooms;
      if (imported.subjects && Array.isArray(imported.subjects)) appData.subjects = imported.subjects;
      if (imported.activities) appData.activities = imported.activities;
      if (imported.settings) appData.settings = { ...appData.settings, ...imported.settings };

      buildSchedulesIndex();

      const navEl = document.getElementById("navSchoolName");
      if (navEl) navEl.textContent = appData.institution;
      const cfgSchoolEl = document.getElementById("cfgSchoolName");
      if (cfgSchoolEl) cfgSchoolEl.value = appData.institution;
      const cfgSlugEl = document.getElementById("cfgProjectSlug");
      if (cfgSlugEl && appData.settings.projectSlug) cfgSlugEl.value = appData.settings.projectSlug;

      populateGlobalDayFilter();
      populateDropdown();
      renderSubjectColorPickers();
      renderDaysAndSlotsEditors();
      renderSettingsEditors();
      renderCurrentView();
    }

    function togglePromoCodeVisibility() {
      const el = document.getElementById('cfgPromoCode');
      if (!el) return;
      el.type = el.type === 'password' ? 'text' : 'password';
    }

    function sanitizeProjectSlugInput(el) {
      if (!el) return;
      el.value = el.value.replace(/[^a-zA-Z0-9_\-]/g, '');
    }

    async function restoreProjectFromCloud() {
      const slugInput = document.getElementById('cfgProjectSlug')?.value?.trim();
      if (!slugInput) {
        showToast("يرجى إدخال اسم مجلد المشروع على السيرفر أولاً!");
        document.getElementById('cfgProjectSlug')?.focus();
        return;
      }

      const statusBox = document.getElementById('uploadStatusBox');
      const statusText = document.getElementById('uploadStatusText');
      const progressFill = document.getElementById('uploadProgressFill');

      if (statusBox) statusBox.classList.remove('hidden');
      if (statusText) statusText.textContent = `جاري استرجاع المشروع (${slugInput}) من السيرفر...`;
      if (progressFill) progressFill.style.width = '45%';

      try {
        const stateUrl = `https://fetprint.fetsync.org/${slugInput}/project_state.json?t=${Date.now()}`;
        const response = await fetch(stateUrl);

        if (!response.ok) {
          throw new Error(`تعذر العثور على ملف المشروع في السيرفر (كود: ${response.status})`);
        }

        const projectState = await response.json();
        if (progressFill) progressFill.style.width = '85%';
        loadProjectDataFromObject(projectState);

        if (progressFill) progressFill.style.width = '100%';
        if (statusText) statusText.innerHTML = `✅ تم استرجاع المشروع <strong class="text-white">${appData.institution}</strong> بنجاح! يمكنك الآن تعديله وإعادة تحديثه فوراً بنفس رمز QR.`;
        showToast("✅ تم استرجاع كامل بيانات المشروع من السيرفر بنجاح!");
      } catch (err) {
        console.error("Cloud restore error:", err);
        if (statusText) statusText.innerHTML = `❌ لم يتم العثور على حالة المشروع المحفوظة في المجلد (${slugInput}). تأكد من صحة الاسم أو ارفعه مجدداً.`;
        if (progressFill) progressFill.style.width = '0%';
        showToast("تعذر العثور على نسخة محفوظة لهذا المجلد على السيرفر");
      }
    }

    async function syncAndUploadToServer() {
      const promoInput = document.getElementById('cfgPromoCode')?.value?.trim();
      const slugInput = document.getElementById('cfgProjectSlug')?.value?.trim();
      const allowOverwrite = document.getElementById('cfgAllowOverwrite')?.checked ?? true;
      const statusBox = document.getElementById('uploadStatusBox');
      const statusText = document.getElementById('uploadStatusText');
      const progressFill = document.getElementById('uploadProgressFill');
      const portalLink = document.getElementById('uploadPortalLink');
      const btn = document.getElementById('btnUploadServer');

      if (!slugInput) {
        showToast("يرجى إدخال اسم مجلد السيرفر (Folder Name) بأحرف لاتينية فقط!");
        document.getElementById('cfgProjectSlug')?.focus();
        return;
      }

      if (!/^[a-zA-Z0-9_\-]+$/.test(slugInput)) {
        showToast("اسم المجلد يجب أن يتكون من أحرف لاتينية وأرقام فقط (A-Z, a-z, 0-9, -, _) بدون مسافات!");
        document.getElementById('cfgProjectSlug')?.focus();
        return;
      }

      if (!promoInput) {
        showToast("يرجى إدخال كود الترخيص للرفع!");
        document.getElementById('cfgPromoCode')?.focus();
        return;
      }

      appData.settings.projectSlug = slugInput;

      if (statusBox) statusBox.classList.remove('hidden');
      if (portalLink) portalLink.classList.add('hidden');
      if (statusText) statusText.textContent = "جاري تحضير الصفحات وحفظ حالة المشروع للعودة لاحقاً...";
      if (progressFill) progressFill.style.width = '20%';
      if (btn) { btn.disabled = true; btn.classList.add('opacity-50'); }

      try {
        const fileBundle = {};
        
        appData.groups.forEach(gName => {
          const sched = appData.groupSchedules[gName] || {};
          const safeName = encodeURIComponent(gName).replace(/%/g, '_');
          fileBundle[`classes/${safeName}.html`] = generateMobileFriendlyHtmlPage(`جدول توقيت القسم: ${gName}`, gName, 'group', sched);
        });

        appData.teachers.forEach(tName => {
          const sched = appData.teacherSchedules[tName] || {};
          const safeName = encodeURIComponent(tName).replace(/%/g, '_');
          fileBundle[`teachers/${safeName}.html`] = generateMobileFriendlyHtmlPage(`جدول توقيت الأستاذ(ة): ${tName}`, tName, 'teacher', sched);
        });

        fileBundle['global.html'] = generateMobileGlobalPage();
        fileBundle['index.html'] = generateMobilePortalIndexHtml(slugInput);

        const projectStateData = {
          version: "3.2-universal",
          exportDate: new Date().toISOString(),
          institution: appData.institution,
          days: appData.days,
          dayMapping: appData.dayMapping,
          hours: appData.hours,
          teachers: appData.teachers,
          groups: appData.groups,
          rooms: appData.rooms,
          subgroupMap: appData.subgroupMap,
          groupHomeRooms: appData.groupHomeRooms,
          subjectDefaultRooms: appData.subjectDefaultRooms,
          subjects: appData.subjects,
          activities: appData.activities,
          settings: appData.settings
        };
        fileBundle['project_state.json'] = JSON.stringify(projectStateData, null, 2);

        if (progressFill) progressFill.style.width = '65%';
        if (statusText) statusText.textContent = `جاري التحقق والمزامنة على السيرفر في المجلد (${slugInput})...`;

        const payload = {
          promoCode: promoInput,
          projectId: slugInput,
          schoolName: appData.institution,
          allowOverwrite: allowOverwrite,
          files: fileBundle
        };

        const response = await fetch('https://fetprint.fetsync.org/api.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: JSON.stringify(payload)
        });

        const resData = await response.json();

        if (resData.status === 'folder_exists') {
          if (progressFill) progressFill.style.width = '0%';
          if (statusText) statusText.innerHTML = `⚠️ <span class="text-amber-400 font-black">المجلد موجود مسبقاً:</span> ${resData.message}`;
          showToast("اسم المجلد مستخدم بالفعل على السيرفر، يمكنك تفعيل خيار التحديث أو اختيار اسم جديد.");
          document.getElementById('cfgProjectSlug')?.classList.add('border-amber-500');
          document.getElementById('cfgProjectSlug')?.focus();
          return;
        }

        if (resData.status === 'success') {
          if (progressFill) progressFill.style.width = '100%';
          if (statusText) statusText.textContent = `✅ تم رفع وتحديث ${resData.totalWritten} جدولاً بنجاح في المجلد (${slugInput}) مع الحفاظ على نفس روابط ورموز QR!`;
          if (portalLink) { portalLink.href = resData.portalUrl; portalLink.classList.remove('hidden'); }
          showToast("تمت المزامنة وحفظ حالة المشروع بنجاح!");
          renderCurrentView();
        } else {
          if (statusText) statusText.textContent = `❌ خطأ: ${resData.message || 'فشلت المزامنة'}`;
          showToast(resData.message || 'فشلت المزامنة');
        }
      } catch (err) {
        console.error("Upload error:", err);
        if (statusText) statusText.textContent = `❌ تعذر الاتصال بـ https://fetprint.fetsync.org/api.php`;
        showToast("تعذر الاتصال بالسيرفر");
      } finally {
        if (btn) { btn.disabled = false; btn.classList.remove('opacity-50'); }
      }
    }

    function generateMobileFriendlyHtmlPage(titleText, entityId, type, sched) {
      const s = appData.settings;
      const directUrl = getDirectUrl(type, entityId);
      const gridHtml = renderSelectedGrid(sched);

      return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${titleText} - ${s.schoolName}</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"><\/script>
  <style>
    body { font-family: 'Cairo', sans-serif; background: #f8fafc; color: #0f172a; margin: 0; padding: 12px; }
    .timetable-table { border-collapse: separate; border-spacing: 0; width: 100%; min-width: 620px; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; }
    .timetable-table th, .timetable-table td { border-bottom: 1px solid #cbd5e1; border-left: 1px solid #cbd5e1; text-align: center; vertical-align: middle; padding: 4px 6px; font-size: 11px; }
    th.main-header { background-color: #064e3b !important; color: #ffffff !important; }
    th.sub-header { background-color: #047857 !important; color: #ffffff !important; }
  </style>
</head>
<body class="bg-slate-100 min-h-screen p-2 sm:p-6">
  <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden p-4 sm:p-6">
    <div class="text-center border-b pb-3 mb-3">
      <div class="text-xs font-bold text-slate-500">${s.republic}</div>
      <div class="text-xs font-black text-slate-700">${s.ministry}</div>
      <div class="flex justify-between items-center text-xs font-bold text-slate-600 mt-2 px-1">
        <span>🏛️ ${s.directorate}</span>
        <span>📅 ${s.schoolYear}</span>
      </div>
      <div class="mt-2 text-base sm:text-lg font-black text-emerald-800 border-b-2 border-emerald-600 inline-block pb-0.5">${titleText}</div>
    </div>

    <div class="sm:hidden text-center text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-200 p-2 rounded-xl mb-3 flex items-center justify-center gap-1.5 font-bold">
      <span>👈 اسحب الجدول أفقياً لتصفح كامل الحصص 👉</span>
    </div>

    <div class="overflow-x-auto rounded-xl shadow-inner border border-slate-200 bg-white mb-4">
      ${gridHtml}
    </div>

    <div class="border-t pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
      <div class="flex items-center gap-3">
        <div id="mobQr" class="w-16 h-16 p-1 border-2 border-slate-800 rounded-xl bg-white flex items-center justify-center shadow"></div>
        <div>
          <span class="font-black text-slate-900 block text-sm">${s.schoolName}</span>
          <span class="text-emerald-700 font-mono text-xs font-bold block" dir="ltr">fetprint.fetsync.org</span>
          <span class="text-[10px] text-slate-500">تم التحقق رسمياً من جدول التوقيت</span>
        </div>
      </div>
      <div class="text-center sm:text-left">
        <span class="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 font-bold px-3 py-1.5 rounded-xl border border-slate-300 text-xs shadow-inner">
          <span>🔒 وثيقة توقيت رسمية مخصصة</span>
        </span>
      </div>
    </div>
  </div>

  <script>
    new QRCode(document.getElementById('mobQr'), {
      text: "${directUrl}",
      width: 60, height: 60,
      colorDark: "#064e3b", colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
    });
  <\/script>
</body>
</html>`;
    }

    function generateMobileGlobalPage() {
      const s = appData.settings;
      const days = appData.days;
      const hours = appData.hours;
      
      const classesTableHtml = generateGlobalTableHtml(days, hours, appData.groups, 'القسم', appData.groupSchedules, false, true, true, true, false, true);
      const teachersTableHtml = generateGlobalTableHtml(days, hours, appData.teachers, 'الأستاذ(ة)', appData.teacherSchedules, false, true, false, true, true, true);
      const roomsTableHtml = generateGlobalTableHtml(days, hours, appData.rooms, 'القاعة', appData.roomSchedules, false, true, true, false, true, true);

      return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>الجداول العامة المجمعة - ${s.schoolName}</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Cairo', sans-serif; background: #f8fafc; color: #0f172a; margin: 0; padding: 12px; }
    .timetable-table { border-collapse: separate; border-spacing: 0; width: 100%; min-width: 650px; border: 1px solid #cbd5e1; border-radius: 8px; }
    .timetable-table th, .timetable-table td { border-bottom: 1px solid #cbd5e1; border-left: 1px solid #cbd5e1; text-align: center; vertical-align: middle; padding: 3px; font-size: 10.5px; }
    th.main-header { background-color: #064e3b !important; color: #ffffff !important; }
    .global-rotated-cell {
      writing-mode: vertical-rl !important;
      transform: rotate(180deg) !important;
      text-orientation: sideways !important;
      white-space: nowrap !important;
      display: flex !important;
      flex-direction: row !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 2px !important;
      margin: 0 auto !important;
      min-height: 65px !important;
      padding: 3px 1.5px !important;
      overflow: hidden !important;
    }
  </style>
</head>
<body class="bg-slate-100 p-2 sm:p-6">
  <div class="max-w-7xl mx-auto bg-white rounded-2xl shadow-md border border-slate-200 p-4 sm:p-6 space-y-4">
    <div class="flex flex-wrap items-center justify-between border-b pb-4 gap-3">
      <div>
        <h1 class="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
          <span>📊</span>
          <span>الجداول العامة المجمعة للمؤسسة</span>
        </h1>
        <p class="text-xs text-slate-500 font-bold mt-0.5">${s.schoolName} • السنة الدراسية: ${s.schoolYear}</p>
      </div>
      
      <div class="flex items-center gap-2">
        <a href="index.html" class="text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded-xl transition flex items-center gap-1">
          <span>🏠</span>
          <span>البوابة الرئيسية</span>
        </a>
      </div>
    </div>

    <div class="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl text-xs font-bold">
      <button onclick="switchGlobalTab('classes')" id="gTabBtn-classes" class="flex-1 py-2 rounded-lg bg-emerald-700 text-white shadow transition">عام الأقسام (${appData.groups.length})</button>
      <button onclick="switchGlobalTab('teachers')" id="gTabBtn-teachers" class="flex-1 py-2 rounded-lg text-slate-600 hover:text-slate-900 transition">عام الأساتذة (${appData.teachers.length})</button>
      <button onclick="switchGlobalTab('rooms')" id="gTabBtn-rooms" class="flex-1 py-2 rounded-lg text-slate-600 hover:text-slate-900 transition">عام القاعات (${appData.rooms.length})</button>
    </div>

    <div class="sm:hidden text-center text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-200 p-2 rounded-xl font-bold">
      <span>👈 اسحب الجدول أفقياً لتصفح جميع الأيام والحصص 👉</span>
    </div>

    <div id="tabContent-classes" class="overflow-x-auto rounded-xl border border-slate-200 bg-white">${classesTableHtml}</div>
    <div id="tabContent-teachers" class="hidden overflow-x-auto rounded-xl border border-slate-200 bg-white">${teachersTableHtml}</div>
    <div id="tabContent-rooms" class="hidden overflow-x-auto rounded-xl border border-slate-200 bg-white">${roomsTableHtml}</div>

    <div class="text-center text-xs text-slate-400 pt-2 border-t font-mono">منظومة FET Cloud Pro Universal</div>
  </div>

  <script>
    function switchGlobalTab(tab) {
      ['classes', 'teachers', 'rooms'].forEach(t => {
        const btn = document.getElementById('gTabBtn-' + t);
        const cont = document.getElementById('tabContent-' + t);
        if (t === tab) {
          btn.className = 'flex-1 py-2 rounded-lg bg-emerald-700 text-white shadow transition font-bold';
          cont.classList.remove('hidden');
        } else {
          btn.className = 'flex-1 py-2 rounded-lg text-slate-600 hover:text-slate-900 transition font-bold';
          cont.classList.add('hidden');
        }
      });
    }
  <\/script>
</body>
</html>`;
    }

    function generateMobilePortalIndexHtml(slug) {
      const s = appData.settings;
      const classOptions = appData.groups.map(g => {
        const safe = encodeURIComponent(g).replace(/%/g, '_');
        return `<option value="classes/${safe}.html">👨‍🎓 القسم: ${g}</option>`;
      }).join('');

      const teacherOptions = appData.teachers.map(t => {
        const safe = encodeURIComponent(t).replace(/%/g, '_');
        return `<option value="teachers/${safe}.html">👨‍🏫 الأستاذ(ة): ${t}</option>`;
      }).join('');

      return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>بوابة جداول التوقيت - ${s.schoolName}</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <style>body { font-family: 'Cairo', sans-serif; background: #0b1120; color: #fff; min-height: 100vh; display: flex; align-items: center; justify-content: center; }</style>
</head>
<body class="p-3 sm:p-6">
  <div class="max-w-lg w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-center">
    <div class="w-16 h-16 bg-gradient-to-tr from-emerald-600 to-teal-400 rounded-2xl mx-auto flex items-center justify-center text-3xl shadow-lg shadow-emerald-950/60 border border-emerald-400/30">🏫</div>
    <div>
      <h1 class="text-xl font-black text-white">${s.schoolName}</h1>
      <p class="text-xs text-emerald-400 font-bold mt-1">بوابة الاستعلام الإلكتروني الموحدة عن جداول التوقيت</p>
      <div class="mt-1 text-[11px] text-slate-400 font-medium">السنة الدراسية: ${s.schoolYear}</div>
    </div>

    <!-- Quick Stats Overview -->
    <div class="grid grid-cols-3 gap-2 bg-slate-950/60 p-3 rounded-2xl border border-slate-800 text-center">
      <div class="p-1.5">
        <span class="block text-base font-black text-emerald-400">${appData.groups.length}</span>
        <span class="text-[10px] text-slate-400 font-bold">أقسام وفوج</span>
      </div>
      <div class="p-1.5 border-x border-slate-800">
        <span class="block text-base font-black text-emerald-400">${appData.teachers.length}</span>
        <span class="text-[10px] text-slate-400 font-bold">أساتذة</span>
      </div>
      <div class="p-1.5">
        <span class="block text-base font-black text-emerald-400">${appData.rooms.length}</span>
        <span class="text-[10px] text-slate-400 font-bold">قاعات</span>
      </div>
    </div>
    
    <div class="space-y-4 text-right">
      <div>
        <label class="block text-xs font-bold text-emerald-300 mb-1.5">👨‍🎓 استعلام جداول الأقسام (التلاميذ):</label>
        <select onchange="if(this.value) window.location.href=this.value" class="w-full text-xs font-bold p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner">
          <option value="">-- اضغط لاختيار القسم المطلوب --</option>
          ${classOptions}
        </select>
      </div>

      <div>
        <label class="block text-xs font-bold text-emerald-300 mb-1.5">👨‍🏫 استعلام جداول الأساتذة:</label>
        <select onchange="if(this.value) window.location.href=this.value" class="w-full text-xs font-bold p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner">
          <option value="">-- اضغط لاختيار الأستاذ المطلوب --</option>
          ${teacherOptions}
        </select>
      </div>

      <div class="pt-2">
        <a href="global.html" class="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 border border-emerald-500/40 text-white font-black text-xs py-3 px-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2">
          <span>📊</span>
          <span>استعراض الجداول العامة المجمعة للمؤسسة</span>
        </a>
      </div>
    </div>

    <div class="pt-4 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
      <span>منظومة FET Cloud Pro</span>
      <span>متوافقة مع كافة الهواتف الذكية 📱</span>
    </div>
  </div>
</body>
</html>`;
    }

    function handleXmlUpload(event) {
      const file = event.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(e) {
        pendingRawXml = e.target.result;
        openPreImportModal(pendingRawXml);
      };
      reader.readAsText(file);
      event.target.value = '';
    }

    function openPreImportModal(xmlString) {
      try {
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlString, "text/xml");

        const instName = xml.querySelector("Institution_Name")?.textContent?.trim() || appData.institution || "المؤسسة التعليمية";

        // Extract raw Teachers
        const teacherElems = xml.querySelectorAll("Teachers_List > Teacher > Name");
        const rawTeachers = [];
        teacherElems.forEach(el => {
          const t = el.textContent.trim();
          if (t && !rawTeachers.includes(t)) rawTeachers.push(t);
        });

        // Extract raw Classes/Groups
        const rawGroups = [];
        xml.querySelectorAll("Students_List > Year").forEach(yearEl => {
          const groupElems = yearEl.querySelectorAll("Group");
          if (groupElems.length > 0) {
            groupElems.forEach(grpEl => {
              const g = grpEl.querySelector("Name")?.textContent?.trim();
              if (g && !rawGroups.includes(g)) rawGroups.push(g);
            });
          } else {
            const y = yearEl.querySelector("Name")?.textContent?.trim();
            if (y && !rawGroups.includes(y)) rawGroups.push(y);
          }
        });

        // Fallback for groups
        xml.querySelectorAll("Activities_List > Activity > Students").forEach(sn => {
          const st = sn.textContent.trim();
          if (st && !rawGroups.includes(st)) rawGroups.push(st);
        });

        pendingExtractedData = {
          institution: instName,
          teachers: rawTeachers,
          groups: rawGroups
        };

        // Populate Modal Fields
        const instInput = document.getElementById("modalInstNameInput");
        if (instInput) instInput.value = instName;

        const teachersContainer = document.getElementById("modalTeachersListContainer");
        const teachersBadge = document.getElementById("modalTeachersCountBadge");
        if (teachersBadge) teachersBadge.textContent = rawTeachers.length;
        if (teachersContainer) {
          teachersContainer.innerHTML = '';
          rawTeachers.forEach((tName, idx) => {
            const row = document.createElement("div");
            row.className = "flex items-center gap-2 p-1.5 bg-slate-50 rounded-lg border border-slate-200 text-xs";
            row.innerHTML = `
              <span class="w-6 text-[10px] font-mono text-slate-400 text-center">${idx + 1}</span>
              <input type="text" data-original-teacher="${tName}" value="${tName}" class="modal-teacher-input flex-1 p-1.5 border border-slate-300 rounded font-bold text-slate-800 bg-white focus:border-brand-500 outline-none">
            `;
            teachersContainer.appendChild(row);
          });
        }

        const classesContainer = document.getElementById("modalClassesListContainer");
        const classesBadge = document.getElementById("modalClassesCountBadge");
        if (classesBadge) classesBadge.textContent = rawGroups.length;
        if (classesContainer) {
          classesContainer.innerHTML = '';
          rawGroups.forEach((gName, idx) => {
            const row = document.createElement("div");
            row.className = "flex items-center gap-2 p-1.5 bg-slate-50 rounded-lg border border-slate-200 text-xs";
            row.innerHTML = `
              <span class="w-6 text-[10px] font-mono text-slate-400 text-center">${idx + 1}</span>
              <input type="text" data-original-group="${gName}" value="${gName}" class="modal-group-input flex-1 p-1.5 border border-slate-300 rounded font-bold text-slate-800 bg-white focus:border-brand-500 outline-none">
            `;
            classesContainer.appendChild(row);
          });
        }

        const modal = document.getElementById("preImportModal");
        if (modal) modal.classList.remove("hidden");
      } catch (err) {
        console.error("Pre-import parsing error:", err);
        // Fallback to direct import
        parseFetXml(xmlString);
      }
    }

    function closePreImportModal() {
      const modal = document.getElementById("preImportModal");
      if (modal) modal.classList.add("hidden");
      pendingRawXml = '';
      pendingExtractedData = null;
    }

    function applyPreImportWithoutChanges() {
      if (pendingRawXml) {
        parseFetXml(pendingRawXml);
      }
      closePreImportModal();
    }

    function confirmCustomizedImport() {
      if (!pendingRawXml) return;

      const instInput = document.getElementById("modalInstNameInput");
      const updatedInst = instInput?.value?.trim() || pendingExtractedData?.institution || appData.institution;

      // Build Teacher Renaming Map
      const teacherMap = {};
      document.querySelectorAll(".modal-teacher-input").forEach(inp => {
        const orig = inp.getAttribute("data-original-teacher");
        const newVal = inp.value.trim();
        if (orig && newVal && orig !== newVal) {
          teacherMap[orig] = newVal;
        }
      });

      // Build Group Renaming Map
      const groupMap = {};
      document.querySelectorAll(".modal-group-input").forEach(inp => {
        const orig = inp.getAttribute("data-original-group");
        const newVal = inp.value.trim();
        if (orig && newVal && orig !== newVal) {
          groupMap[orig] = newVal;
        }
      });

      // Apply modifications to raw XML DOM
      try {
        const parser = new DOMParser();
        const xml = parser.parseFromString(pendingRawXml, "text/xml");

        // Update institution
        const instNode = xml.querySelector("Institution_Name");
        if (instNode) instNode.textContent = updatedInst;

        // Replace Teacher names across Teachers_List and Activities_List
        Object.entries(teacherMap).forEach(([oldName, newName]) => {
          xml.querySelectorAll("Teachers_List > Teacher > Name").forEach(node => {
            if (node.textContent.trim() === oldName) node.textContent = newName;
          });
          xml.querySelectorAll("Activities_List > Activity > Teacher").forEach(node => {
            if (node.textContent.trim() === oldName) node.textContent = newName;
          });
        });

        // Replace Group names across Students_List, Activities_List and Space Constraints
        Object.entries(groupMap).forEach(([oldName, newName]) => {
          xml.querySelectorAll("Students_List Group > Name").forEach(node => {
            if (node.textContent.trim() === oldName) node.textContent = newName;
          });
          xml.querySelectorAll("Students_List Year > Name").forEach(node => {
            if (node.textContent.trim() === oldName) node.textContent = newName;
          });
          xml.querySelectorAll("Activities_List > Activity > Students").forEach(node => {
            if (node.textContent.trim() === oldName) node.textContent = newName;
          });
          xml.querySelectorAll("Space_Constraints_List ConstraintStudentsSetHomeRoom > Students").forEach(node => {
            if (node.textContent.trim() === oldName) node.textContent = newName;
          });
        });

        const serializer = new XMLSerializer();
        const modifiedXml = serializer.serializeToString(xml);
        parseFetXml(modifiedXml);
        showToast("✅ تم اعتماد وتطبيق التعديلات المخصصة واستيراد البيانات بنجاح!");
      } catch (err) {
        console.error("Error applying customized import:", err);
        parseFetXml(pendingRawXml);
      }

      closePreImportModal();
    }

    function showToast(message) {
      const toast = document.getElementById('toast');
      const msgEl = document.getElementById('toastMsg');
      if (!toast || !msgEl) return;
      msgEl.textContent = message;
      toast.classList.remove('translate-y-24', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
      setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-24', 'opacity-0');
      }, 3500);
    }

    window.addEventListener('DOMContentLoaded', () => {
      parseFetXml(INITIAL_FET_XML_DATA);
    });
