function showMiddlePane(section) {
    const middlePane = document.getElementById('middle-pane');
    const thirdPane = document.getElementById('third-pane');
    let content = '';

    switch (section) {
        case 'certificates':
            content = `
                <h2>Certificates</h2>
                <button onclick="showThirdPane('20years')">20 years of existence</button>
                <button onclick="showThirdPane('sponsoring')">Sponsoring Society</button>
                <button onclick="showThirdPane('naac')">NAAC</button>
                <button onclick="showThirdPane('nirf')">NIRF</button>
                <button onclick="showThirdPane('accolades')">Awards & Accolades</button>
                <button onclick="showThirdPane('corpus')">Corpus Fund</button>
                <button onclick="showThirdPane('affidavits')">Affidavits & Undertaking</button>
            `;
            break;
        case 'about':
            content = `
                <h2>About RCSS</h2>
                <button onclick="showThirdPane('department')">Department</button>
                <button onclick="showThirdPane('students')">Student Strength</button>
                <button onclick="showThirdPane('faculty')">Faculty</button>
                <button onclick="showThirdPane('fsr')">FSR</button>
                <button onclick="showThirdPane('postgrad_research')">Post Graduate Depts with Research</button>
            `;
            break;
        case 'aicte':
            content = `
                <h2>Regulatory Bodies</h2>
                <button onclick="showThirdPane('aicte')">AICTE</button>
            `;
            break;
        case 'infrastructure':
            content = `
                <h2>Infrastructure</h2>
                <button onclick="showThirdPane('land_ownership')">Land Ownership</button>
                <button onclick="showThirdPane('building_plan')">Building Plan</button>
                <button onclick="showThirdPane('hostels')">Hostels</button>
                <button onclick="showThirdPane('sports_facilities')">Sports Facilities</button>
                <button onclick="showThirdPane('common_areas')">Common Areas</button>
            `;
            break;
        case 'photos':
            content = `
                <h2>Photos</h2>
		<button onclick="showThirdPane('administration')">Administration</button>
		<button onclick="showThirdPane('academic')">Academic</button>
		<button onclick="showThirdPane('hostels')">Hostels</button>
		<button onclick="showThirdPane('sports_facilities')">Sports Facilities</button>
		<button onclick="showThirdPane('recreational_facilities')">Recreational Facilities</button>
		<button onclick="showThirdPane('common_areas')">Common Areas</button>
		<button onclick="showThirdPane('others')">Others</button>
            `;
            break;
        case 'research':
            content = `
                <h2>Research & Consultancy</h2>
		<button onclick="showThirdPane('Research_Promotion')">Research Promotion Initiatives</button>
                <button onclick="showThirdPane('publications')">Publications</button>
		<button onclick="showThirdPane('patent')">Entrepreneurship and Innovations</button>
                <button onclick="showThirdPane('grants')">Research Grants</button>
                <button onclick="showThirdPane('consultancy')">Consultancy</button>
		<button onclick="showThirdPane('doc_centres')">Doctoral Centres</button>
            `;
            break;
        case 'governance':
            content = `
                <h2>Governance</h2>
		<button onclick="showThirdPane('organisation')">Organisation</button>
                <button onclick="showThirdPane('committee')">Committees</button>
                <button onclick="showThirdPane('policy')">Policies</button>
            `;
            break;
        case 'academics':
            content = `
                <h2>Academics</h2>
                <button onclick="showThirdPane('admission')">Admissions</button>
                <button onclick="showThirdPane('curriculum')">Curriculum and Pedagogy</button>
                <button onclick="showThirdPane('feedback')">Feedback System</button>
		<button onclick="showThirdPane('examination')">Assessment and Evaluation</button>
		<button onclick="showThirdPane('progression')">Student Progression</button>
            `;
            break;
        case 'co_curricular':
            content = `
                <h2>Co-Curricular/Extra Curricular</h2>
                <button onclick="showThirdPane('sports')">Sports</button>
                <button onclick="showThirdPane('fests')">Events and Fests</button>
		<button onclick="showThirdPane('clubs')">Student Associations and Clubs</button>
            `;
            break;
    }

    middlePane.innerHTML = content;
    thirdPane.innerHTML = '';
}

function showThirdPane(subsection) {
    const thirdPane = document.getElementById('third-pane');
    let content = '';

    switch (subsection) {
        case '20years':
            content = `
                <h2>20 years of existence</h2>
                <ul>
                    	<li><a href="https://drive.google.com/file/d/1Rz6qR6Bvieb8MWycg5eUcdJWzYfAxiyg/view?usp=drive_link" target="_blank">Affiliation to Kerala University (1980)</a></li>
                    	<li><a href="https://drive.google.com/file/d/1rKWe9J2_X9piT0Bmn6wx8aj_SjIbXLfY/view?usp=drive_link" target="_blank">Affiliation to MG University (1986)</a></li>
                    	<li><a href="https://drive.google.com/file/d/1bzIuNmnrjv60B12iDccyp8yZauibY_NR/view?usp=drive_link" target="_blank">UGC 12B</a></li>
			<li><a href="https://drive.google.com/file/d/1TMDl6tz0sH4wqa4VNjDIo1q0G9o_Gy3j/view?usp=drive_link" target="_blank">UGC 2F</a></li>
                      	<li><a href="https://drive.google.com/file/d/177kE7SziOcpI-jyOIORK0LTar9NS1KKZ/view?usp=drive_link" target="_blank">Autonomy Grant (2014)</a></li>
                    	<li><a href="https://drive.google.com/file/d/1BLbZwBvB7guVqIZd2UkRIRvppsOJDbpl/view?usp=drive_link" target="_blank">Renewal of Autonomy up to (2030)</a></li>
                </ul>
            `;
            break;

        case 'sponsoring':
            content = `
                <h2>Sponsoring Society</h2>
                <ul>
                    <li><a href="https://drive.google.com/file/d/12BOm-5zf8YKLT5EeFOauFqOu0aHq37ig/view?usp=drive_link" target="_blank">Registration Certificate</a></li>
                    <li><a href="https://drive.google.com/file/d/1oKQy1JmymrifFRjcAInfGWckPpW4pELs/view?usp=drive_link" target="_blank">Office Bearers</a></li>
                    <li><a href="https://drive.google.com/file/d/1ofDp1J1t-PRs0NqpWGyfJRJukvvk53cj/view?usp=drive_link" target="_blank">By-law of the Society</a></li>
                </ul>
            `;
            break;
        case 'naac':
            content = `
                <h2>NAAC Certificates</h2>
                <ul>
                    	<li><a href="https://drive.google.com/file/d/1s-6yvdXoRj8l0fa3eWQK8_wmfqglYk9N/view?usp=drive_link" target="_blank">2023 - A++ with CGPA 3.83 </a></li>
			<li><a href="https://drive.google.com/file/d/1TPdBtoYG_h5LoAKDaop0U_6bjtBtaRXM/view?usp=drive_link" target="_blank">2023 - 2018 - Extension-High Performing Institution</a></li>
			<li><a href="https://drive.google.com/file/d/1OExju4l0CJj4FPuGBy8S5BV5VwfE4rtN/view?usp=drive_link" target="_blank">2013 - A+ with CGPA 3.7 </a></li>
			<li><a href="https://drive.google.com/file/d/1aYNbG3JcO0Bh3mP7WSzPT7b8robhQGuJ/view?usp=drive_link" target="_blank">2007 - A with CGPA 3.64 </a></li>
			<li><a href="https://drive.google.com/file/d/1_m41QCwWNqIkYPocBTZ5NutaOc_beO7A/view?usp=drive_link" target="_blank">2000 - 5 star</a></li>
                </ul>
            `;
            break;
         case 'nirf':
            content = `
                <h2>NIRF Certificates</h2>
                <ul>
                    	<li><a href="https://drive.google.com/file/d/1_8jL16NfnxDgh9LPiAze4NSEXPknGMoq/view?usp=drive_link" target="_blank">2024 - 20th Rank</a></li>
			<li><a href="https://drive.google.com/file/d/15GlwICeJTLycjC5saC2SI0IAFsTEsXjO/view?usp=drive_link" target="_blank">2023 - 30th Rank</a></li>
			<li><a href="https://drive.google.com/file/d/1KkTNPZzM7yssAVPdGUAMxGKqj1V5EJ_P/view?usp=drive_link" target="_blank">2022  - 27th Rank</a></li>
			<li><a href="https://drive.google.com/file/d/10hXey-1dbrz7J22TbaHHb_wL1Y8WporX/view?usp=drive_link" target="_blank">2021 -  31st Rank</a></li>
			<li><a href="https://drive.google.com/file/d/1H-sB_YjBMPbZtv8UJSbRH4KmtmsO1BL9/view?usp=drive_link" target="_blank">2020 - 28th Rank</a></li>
			<li><a href="https://drive.google.com/file/d/1rlLgtsgknJOHX6hHdMm4lhoYHxXKcf0Y/view?usp=drive_link" target="_blank">2019 - 35th Rank</a></li>
			<li><a href="https://drive.google.com/file/d/1GxD_S2d43buGWHZg6AEmNWARD-d-RvO2/view?usp=drive_link" target="_blank">2018 - 43rd Rank</a></li>
			<li><a href="https://drive.google.com/file/d/1-53cgNpvFAov_SHf2vj33IB9_fLIIIVU/view?usp=drive_link" target="_blank">2017 - 25th Rank</a></li>
                </ul>
            `;
            break;   
         case 'accolades':
            content = `
                <h2>Accolades</h2>
                <ul>
                    	<li><a href="" target="_blank">AACSB</a></li>
			<li><a href="" target="_blank">EFMD</a></li>
			<li><a href="" target="_blank">ACBSB</a></li>
			<li><a href="" target="_blank">Scientific and Industrial Research Organizations</a></li>
			<li><a href="" target="_blank">Swachh Bharat</a></li>
			<li><a href="" target="_blank">AICTE Utkrisht- Sansthan Viswa Karma Award</a></li>
			<li><a href="" target="_blank">Outlook - 2nd Best Social Work</a></li>
			<li><a href="" target="_blank">Week -  2nd Best Social Work</a></li>
			<li><a href="" target="_blank">Renewable Energy Award</a></li>
                    	<li><a href="https://example.com/e-governance-awards" target="_blank">E-Governance Awards</a></li>
                    	<li><a href="https://example.com/xavier-board-award" target="_blank">Xavier Board National Award</a></li>
                    	<li><a href="https://example.com/sahacharee-award" target="_blank">Sahacharee Award</a></li>
                    	<li><a href="https://example.com/cima-excellence-2021" target="_blank">CIMA Excellence Award 2021</a></li>
                    	<li><a href="https://example.com/indian-quality-assurance-award" target="_blank">Indian Quality Assurance Award</a></li>
                    	<li><a href="https://example.com/dsir-siro-recognition" target="_blank">DSIR-SIRO Recognition</a></li>
                    	<li><a href="https://example.com/nipam-certificate" target="_blank">National Intellectual Property Awareness Mission (NIPAM)-Azadi Ka Amrit Mahotsav-Certificate of Recognition</a></li>
                    	<li><a href="https://example.com/beat-covid-campaign" target="_blank">Certificate of Recognition for "Beat Covid Campaign"-Mahatma Gandhi National Council of Rural Education</a></li>
                    	<li><a href="https://example.com/nss-2021" target="_blank">National Service Scheme (NSS) 2021</a></li>
                    	<li><a href="https://example.com/paristhithi-mithra-2023" target="_blank">Paristhithi Mithra Award 2023</a></li>
                    	<li><a href="https://example.com/green-nature-award" target="_blank">Green Nature Award</a></li>
                    	<li><a href="https://example.com/india-elite-excellence-award" target="_blank">India Elite Educational & Institutional Excellence Award</a></li>
                </ul>
            `;
            break; 
	case 'corpus':
            content = `
                <h2>Corpus Fund Receipt</h2>
                <ul>
                    	<li><a href="https://drive.google.com/file/d/1vOeMlVDLy1HdLyCd9-_IqeTmo3ZR91VC/view?usp=drive_link" target="_blank">Proof of the Corpus Fund Receipt </a></li>
            `;
            break; 
	case 'affidavits':
            content = `
                <h2>Affidavits & Undertaking</h2>
                <ul>
                    <li><a href="https://example.com/affidavit-movable-immovable-assets" target="_blank">Affidavit - Movable & Immovable Assets</a></li>
                    <li><a href="https://example.com/legal-undertaking-academic-activities" target="_blank">Legal Undertaking - Academic Activities</a></li>
                    <li><a href="https://example.com/undertaking-rajagiri-deemed-university" target="_blank">Undertaking – Rajagiri Deemed to be University</a></li>
                    <li><a href="https://example.com/undertaking-not-for-profit-organisation" target="_blank">Undertaking - Not-for-Profit Organisation</a></li>
                    <li><a href="https://example.com/undertaking-moa" target="_blank">Undertaking - MOA</a></li>
                    <li><a href="https://example.com/undertaking-rcss-rbs-rcss-society" target="_blank" >Undertaking - RCSS & RBS Managed by RCSS Society</a></li>
		    <li><a href="https://example.com/undertaking-rcss-rbs-rcss-society" target="_blank" >Letter of Commitment</a></li>
                </ul>
            `;
            break;
	case 'department':
            content = `
                <h2>Departments</h2>
                <ul>
                    <li><a href="https://example.com/social-work" target="_blank">Social Work</a></li>
                    <li><a href="https://example.com/personnel-management" target="_blank">Personnel Management</a></li>
                    <li><a href="https://example.com/business-administration" target="_blank">Business Administration</a></li>
                    <li><a href="https://example.com/computer-science" target="_blank">Computer Science</a></li>
                    <li><a href="https://example.com/library-information-sciences" target="_blank">Library & Information Sciences</a></li>
                    <li><a href="https://example.com/statistics" target="_blank">Statistics</a></li>
                    <li><a href="https://example.com/commerce" target="_blank">Commerce</a></li>
                    <li><a href="https://example.com/psychology" target="_blank">Psychology</a></li>
                    <li><a href="https://example.com/biosciences" target="_blank">Biosciences</a></li>
                    <li><a href="https://example.com/business-school" target="_blank">Business School</a></li>
                </ul>
            `;
            break;
        case 'students':
            content = `
                <h2>List of Enrolled Students</h2>
                <ul>
                    <li><a href="https://example.com/enrolled-students-2024-25" target="_blank">List of Enrolled Students (2024-25) - 3005</a></li>
                    <li><a href="https://example.com/enrolled-students-2023-24" target="_blank">List of Enrolled Students (2023-24) - 2791</a></li>
                    <li><a href="https://example.com/enrolled-students-2022-23" target="_blank">List of Enrolled Students (2022-23) - 2624</a></li>
                </ul>
            `;
            break;
	case 'faculty':
            content = `
                <h2>List of Faculty</h2>
                <ul>
                    <li><a href="https://example.com/faculty-2024-25" target="_blank">List of Faculty (2024-25) - 165</a></li>
                    <li><a href="https://example.com/faculty-2023-24" target="_blank">List of Faculty (2023-24) - 147</a></li>
                    <li><a href="https://example.com/faculty-2022-23" target="_blank">List of Faculty (2022-23) - 133</a></li>
                </ul>
            `;
            break;
	case 'fsr':
            content = `
                <h2>FSR (Faculty-Student Ratio)</h2>
                <ul>
                    <li><a href="https://example.com/fsr-2024-25" target="_blank">FSR (2024-25) - 1:18</a></li>
                    <li><a href="https://example.com/fsr-2023-24" target="_blank">FSR (2023-24) - 1:19</a></li>
                    <li><a href="https://example.com/fsr-2022-23" target="_blank">FSR (2022-23) - 1:20</a></li>
                </ul>
            `;
            break;
	case 'postgrad_research':
            content = `
                <h2>Post Graduate Departments with Research</h2>
                <ul>
                    <li><a href="https://example.com/social-work" target="_blank">Social Work - Incepted in 1980 with MSW</a></li>
                    <li><a href="https://example.com/personnel-management" target="_blank">Personnel Management - Incepted in 1984 with MA(PM)</a></li>
                    <li><a href="https://example.com/business-administration" target="_blank">Business Administration - Incepted in 1995 with MBA</a></li>
                    <li><a href="https://example.com/computer-science" target="_blank">Computer Science - Incepted in 2001 with MCA</a></li>
                    <li><a href="https://example.com/psychology" target="_blank">Psychology - Incepted in 2016 with M.Sc. Psychology</a></li>
                    <li><a href="https://example.com/rajagiri-business-school" target="_blank">Rajagiri Business School - Incepted in 2008 with PGDM</a></li>
                    <li><a href="https://example.com/biosciences" target="_blank">Biosciences (Only Ph.D programmes) - Incepted in 2018</a></li>
                </ul>
            `;
            break;
	case 'aicte':
            content = `
                <h2>AICTE Programmes</h2>
                <ul>
                    <li><strong>MBA</strong>
                        <ul>
                            <li><a href="https://example.com/mba-loa" target="_blank">LOA</a></li>
                            <li><a href="https://example.com/mba-eoa" target="_blank">EOA</a></li>
                            <li><a href="https://example.com/mba-nba-2023" target="_blank">NBA 2023</a></li>
                            <li><a href="https://example.com/mba-nba-2015" target="_blank">NBA 2015</a></li>
                        </ul>
                    </li>
                    <li><strong>PGDM</strong>
                        <ul>
                            <li><a href="https://example.com/pgdm-loa" target="_blank">LOA</a></li>
                            <li><a href="https://example.com/pgdm-eoa" target="_blank">EOA</a></li>
                            <li><a href="https://example.com/pgdm-nba-2023" target="_blank">NBA 2023</a></li>
                            <li><a href="https://example.com/pgdm-nba-2015" target="_blank">NBA 2015</a></li>
                        </ul>
                    </li>
                    <li><strong>MCA</strong>
                        <ul>
                            <li><a href="https://example.com/mca-loa" target="_blank">LOA</a></li>
                            <li><a href="https://example.com/mca-eoa" target="_blank">EOA</a></li>
                        </ul>
                    </li>
                    <li><strong>FPM</strong>
                        <ul>
                            <li><a href="https://example.com/fpm-loa" target="_blank">LOA</a></li>
                            <li><a href="https://example.com/fpm-eoa" target="_blank">EOA</a></li>
                        </ul>
                    </li>
                    <li><strong>IMCA</strong>
                        <ul>
                            <li><a href="https://example.com/imca-loa" target="_blank">LOA</a></li>
                        </ul>
                    </li>
                    <li><strong>IMBA</strong>
                        <ul>
                            <li><a href="https://example.com/imba-loa" target="_blank">LOA</a></li>
                        </ul>
                    </li>
                    <li><strong>BBA</strong>
                        <ul>
                            <li><a href="https://example.com/bba-loa" target="_blank">LOA</a></li>
                        </ul>
                    </li>
                    <li><strong>BCA</strong>
                        <ul>
                            <li><a href="https://example.com/bca-loa" target="_blank">LOA</a></li>
                        </ul>
                    </li>
                </ul>
            `;
            break;
	case 'land_ownership':
            content = `
                <h2>Land Ownership</h2>
                <ul>
                    <li><a href="https://example.com/deed1" target="_blank">Deed 1: Survey No.2715/1960 Ares.extent</a></li>
                    <li><a href="https://example.com/deed2" target="_blank">Deed 2: 831/1965</a></li>
                    <li><a href="https://example.com/deed3" target="_blank">Deed 3: 3704/1978</a></li>
                    <li><a href="https://example.com/deed4" target="_blank">Deed 4: 3705/1978</a></li>
                    <li><a href="https://example.com/deed5" target="_blank">Deed 5: 670/1958</a></li>
                    <li><a href="https://example.com/deed6" target="_blank">Deed 6: 3749/2016</a></li>
                    <li><a href="https://example.com/deed7" target="_blank">Deed 7: 57/2001</a></li>
                    <li><a href="https://example.com/deed8" target="_blank">Deed 8: 58/2001</a></li>
                    <li><a href="https://example.com/deed9" target="_blank">Deed 9: 59/2001</a></li>
                    <li><a href="https://example.com/deed10" target="_blank">Deed 10: 68/2001</a></li>
                    <li><a href="https://example.com/deed11" target="_blank">Deed 11: 69/2001</a></li>
                    <li><a href="https://example.com/deed12" target="_blank">Deed 12: 70/2001</a></li>
                    <li><a href="https://example.com/deed13" target="_blank">Deed 13: 10/1993</a></li>
                    <li><a href="https://example.com/deed14" target="_blank">Deed 14: 2117/2000</a></li>
                    <li><a href="https://example.com/deed15" target="_blank">Deed 15: 2122/2000</a></li>
                    <li><a href="https://example.com/deed16" target="_blank">Deed 16: 3748/2007</a></li>
                    <li><a href="https://example.com/deed17" target="_blank">Deed 17: 3432/1981</a></li>
                    <li><a href="https://example.com/deed18" target="_blank">Deed 18: 3148/1981</a></li>
                    <li><a href="https://example.com/deed19" target="_blank">Deed 19: 1196/1971</a></li>
                    <li><a href="https://example.com/deed20" target="_blank">Deed 20: 2579/2023</a></li>
                    <li><a href="https://example.com/deed21" target="_blank">Deed 21: 1761/2024</a></li>
                </ul>
            `;
            break;
	case 'building_plan':
            content = `
                <h2>Building Plan</h2>
                <ul>
                    <li><a href="https://example.com/carmel-block" target="_blank">RCSS - Carmel Block</a></li>
                    <li><a href="https://example.com/old-academic-block" target="_blank">RCSS - Old Academic Block</a></li>
                    <li><a href="https://example.com/rbs" target="_blank">RCBS-RBS</a></li>
                    <li><a href="https://example.com/rsom" target="_blank">RCBS-RSOM</a></li>
                    <li><a href="https://example.com/assumption-hostel" target="_blank">Assumption Hostel - RCSS</a></li>
                    <li><a href="https://example.com/international-hostel" target="_blank">International Hostel - RCSS</a></li>
                    <li><a href="https://example.com/la-providance-hostel" target="_blank">La-Providance Hostel</a></li>
                    <li><a href="https://example.com/mens-hostel" target="_blank">Men’s Hostel - RCBS</a></li>
                    <li><a href="https://example.com/nirmala-hostel" target="_blank">Nirmala Hostel-RCSS</a></li>
                    <li><a href="https://example.com/nirmala-hostel-annex" target="_blank">Nirmala Hostel - Annex RCSS</a></li>
                    <li><a href="https://example.com/khasara-plan-rcss" target="_blank">Khasara Plan - RCSS</a></li>
                    <li><a href="https://example.com/khasara-plan-rcbs" target="_blank">Khasara Plan - RCBS</a></li>
		    <li><a href="https://example.com/proposed-building-plan" target="_blank">Proposed Building Plan</a></li>
                </ul>
            `;
            break;
	case 'administration':
            content = `
                <h2>Administration Offices</h2>
                <ul>
                    <li><a href="https://example.com/college-office" target="_blank">College Office</a></li>
                    <li><a href="https://example.com/admission-office" target="_blank">Admission Office</a></li>
                    <li><a href="https://example.com/principal-office" target="_blank">Principal Office</a></li>
                    <li><a href="https://example.com/manager-office" target="_blank">Manager Office</a></li>
                    <li><a href="https://example.com/associate-director-office" target="_blank">Associate Director Office</a></li>
                    <li><a href="https://example.com/assistant-director-office" target="_blank">Assistant Director Office</a></li>
                    <li><a href="https://example.com/administrator-office" target="_blank">Administrator Office</a></li>
                    <li><a href="https://example.com/placements-office" target="_blank">Placements Office</a></li>
                    <li><a href="https://example.com/international-office" target="_blank">International Office</a></li>
                    <li><a href="https://example.com/office-annexe" target="_blank">Office Annexe (server room with Camera control)</a></li>
                    <li><a href="https://example.com/iqac" target="_blank">IQAC</a></li>
                    <li><a href="https://example.com/examination-department" target="_blank">Examination Department</a></li>
                    <li><a href="https://example.com/hrdc-cell" target="_blank">HRDC Cell</a></li>
                    <li><a href="https://example.com/director-office" target="_blank">Director Office</a></li>
                    <li><a href="https://example.com/executive-director-room" target="_blank">Executive Director Room</a></li>
                    <li><a href="https://example.com/dean-student-affairs-office" target="_blank">Dean Student Affairs Office</a></li>
                    <li><a href="https://example.com/accounts-office" target="_blank">Accounts Office</a></li>
                </ul>
            `;
            break;
	case 'academic':
            content = `
                <h2>Academic Facilities</h2>
                <ul>
                    <li><a href="https://example.com/classrooms" target="_blank">Classrooms</a></li>
                    <li><a href="https://example.com/tutorial-rooms" target="_blank">Tutorial Rooms</a></li>
                    <li><a href="https://example.com/computer-labs" target="_blank">Computer Labs</a></li>
                    <li><a href="https://example.com/bioscience-lab" target="_blank">Bioscience Lab</a></li>
                    <li><a href="https://example.com/deans-hod-room" target="_blank">Deans and HOD Room</a></li>
                    <li><a href="https://example.com/faculty-wing" target="_blank">Faculty Wing</a></li>
                    <li><a href="https://example.com/psychology-lab" target="_blank">Psychology Lab</a></li>
                    <li><a href="https://example.com/open-learning-area" target="_blank">Open Learning Area</a></li>
                    <li><a href="https://example.com/seminar-halls" target="_blank">Seminar Halls</a></li>
                    <li><a href="https://example.com/media-centre" target="_blank">Media Centre</a></li>
                    <li><a href="https://example.com/library" target="_blank">Library</a></li>
                    <li><a href="https://example.com/incubation-centers" target="_blank">Incubation Centers</a></li>
                    <li><a href="https://example.com/examination-halls" target="_blank">Examination Halls</a></li>
                    <li><a href="https://example.com/research-centers" target="_blank">Research Centers</a></li>
                    <li><a href="https://example.com/group-learning-centers" target="_blank">Group Learning Centers</a></li>
                </ul>
            `;
            break;
	case 'hostels':
            content = `
                <h2>Hostels and Staff Quarters</h2>
                <ul>
                    <li><a href="https://example.com/girls-hostel" target="_blank">Girls Hostel</a></li>
                    <li><a href="https://example.com/mens-hostel" target="_blank">Men’s Hostel</a></li>
                    <li><a href="https://example.com/international-hostel" target="_blank">International Hostel</a></li>
                    <li><a href="https://example.com/staff-quarters" target="_blank">Staff Quarters</a></li>
                </ul>
            `;
            break;
	case 'sports_facilities':
            content = `
                <h2>Sports Facilities</h2>
                <ul>
                    <li><a href="https://example.com/swimming-pool" target="_blank">Swimming Pool</a></li>
                    <li><a href="https://example.com/sports-complex-centre" target="_blank">Rajagiri Sports Complex Centre - Indoor Games</a></li>
                    <li><a href="https://example.com/football-ground" target="_blank">Football Ground</a></li>
                    <li><a href="https://example.com/cricket-ground" target="_blank">Cricket Ground</a></li>
                    <li><a href="https://example.com/snooker-table" target="_blank">Snooker Table</a></li>
                    <li><a href="https://example.com/riverview" target="_blank">Riverview</a></li>
                    <li><a href="https://example.com/yoga-arena-bella-vista" target="_blank">Yoga Arena - Bella Vista</a></li>
                    <li><a href="https://example.com/badminton-court" target="_blank">Badminton Court</a></li>
                    <li><a href="https://example.com/yoga-arena-amigo" target="_blank">Yoga Arena - Amigo</a></li>
                    <li><a href="https://example.com/basketball-court" target="_blank">Basketball Court</a></li>
                </ul>
            `;
            break;
	case 'recreational_facilities':
            content = `
                <h2>Recreational Facilities</h2>
                <ul>
                    <li><a href="https://example.com/cafeterias" target="_blank">Cafeterias</a></li>
                    <li><a href="https://example.com/mess-halls" target="_blank">Mess Halls</a></li>
                    <li><a href="https://example.com/open-spaces" target="_blank">Open Spaces</a></li>
                    <li><a href="https://example.com/prayer-halls" target="_blank">Prayer Halls</a></li>
                    <li><a href="https://example.com/canteen" target="_blank">Canteen</a></li>
                    <li><a href="https://example.com/boys-gymnasium" target="_blank">Boys Gymnasium</a></li>
                    <li><a href="https://example.com/open-gymnasium" target="_blank">Open Gymnasium</a></li>
                    <li><a href="https://example.com/ladies-gymnasium" target="_blank">Ladies Gymnasium</a></li>
                    <li><a href="https://example.com/auditoriums" target="_blank">Auditoriums</a></li>
                    <li><a href="https://example.com/open-lounge-seating" target="_blank">Open Lounge Seating Zone</a></li>
                </ul>
            `;
            break;
	case 'common_areas':
            content = `
                <h2>Common Areas</h2>
                <ul>
                    <li><a href="https://example.com/boys-common-areas" target="_blank">Boys Common Areas</a></li>
                    <li><a href="https://example.com/girls-common-areas" target="_blank">Girls Common Areas</a></li>
                    <li><a href="https://example.com/central-store" target="_blank">Central Store</a></li>
                    <li><a href="https://example.com/life" target="_blank">LIFE</a></li>
                    <li><a href="https://example.com/boys-sick-room" target="_blank">Boys Sick Room</a></li>
                    <li><a href="https://example.com/girls-sick-room" target="_blank">Girls Sick Room</a></li>
                    <li><a href="https://example.com/stationary-reprographic-facility" target="_blank">Stationary and Reprographic Facility</a></li>
                    <li><a href="https://example.com/toilet-boys" target="_blank">Toilet Boys</a></li>
                    <li><a href="https://example.com/toilet-girls" target="_blank">Toilet Girls</a></li>
                    <li><a href="https://example.com/toilet-transgenders" target="_blank">Toilet Transgenders</a></li>
                    <li><a href="https://example.com/toilet-divyangjan" target="_blank">Toilet Divyangjan</a></li>
                </ul>
            `;
            break;
	case 'others':
            content = `
                <h2>Other Facilities</h2>
                <ul>
                    <li><a href="https://example.com/banks" target="_blank">Banks</a></li>
                    <li><a href="https://example.com/post-office" target="_blank">Post Office</a></li>
                    <li><a href="https://example.com/board-room" target="_blank">Board Room</a></li>
                    <li><a href="https://example.com/receptions" target="_blank">Receptions</a></li>
                    <li><a href="https://example.com/stp" target="_blank">STP</a></li>
                    <li><a href="https://example.com/rainwater-harvesting" target="_blank">Rainwater Harvesting</a></li>
                    <li><a href="https://example.com/solar" target="_blank">Solar</a></li>
                    <li><a href="https://example.com/ev-charging-station" target="_blank">EV Charging Station</a></li>
                    <li><a href="https://example.com/electrical-generator-room" target="_blank">Electrical Room, Generator Room</a></li>
                    <li><a href="https://example.com/water-coolers" target="_blank">Water Coolers</a></li>
                    <li><a href="https://example.com/lifts-ramps" target="_blank">Lifts and Ramps</a></li>
                    <li><a href="https://example.com/house-keeping" target="_blank">House Keeping</a></li>
                    <li><a href="https://example.com/security-cabins" target="_blank">Security Cabins</a></li>
                    <li><a href="https://example.com/guest-rooms" target="_blank">Guest Rooms</a></li>
                </ul>
            `;
            break;
	case 'publications':
            content = `
                <h2>Publications</h2>
                <ul>
                    <li><a href="https://example.com/consolidated-sheet-2021-2024" target="_blank">Consolidated Sheet of 2021 to 2024</a></li>
                    <li><a href="https://example.com/scopus-indexed" target="_blank">Scopus Indexed</a></li>
                    <li><a href="https://example.com/web-of-science-indexed" target="_blank">Web of Science Indexed</a></li>
                    <li><a href="https://example.com/ugc-peer-reviewed" target="_blank">UGC & Other Peer Reviewed</a></li>
                    <li><a href="https://example.com/h-index-rcss-rbs" target="_blank">H-Index of RCSS & RBS</a></li>
                    <li><a href="https://example.com/impact-factor-rcss-rbs" target="_blank">Impact Factor of RCSS & RBS</a></li>
                </ul>
            `;
            break;
	case 'Research_Promotion':
            content = `
                <h2>Research Promotion Activities</h2>
                <ul>
		    <li><a href="https://example.com/research-grants" target="_blank">Research Policy</a></li>
		    <li><a href="https://example.com/seed-money" target="_blank">Brown Bag Samvad</a></li>
                    <li><a href="https://example.com/research-incentives" target="_blank">Research Incentives</a></li>
                    <li><a href="https://example.com/research-recognitions" target="_blank">Research Recognitions</a></li>
               </ul>
            `;
            break;
	case 'patent':
            content = `
                <h2>Entrepreneurship and Innovations</h2>
                <ul>
                    <li><a href="https://example.com/patent" target="_blank">Centre for Entrepreneurship Development and Innovations</a></li>
		    <li><a href="https://example.com/patent" target="_blank">Patents granted</a></li>
                    <li><a href="https://example.com/consultancy" target="_blank">Patents Published</a></li>
		    <li><a href="https://example.com/consultancy" target="_blank">Photographs</a></li>
                </ul>
            `;
            break;
	case 'grants':
            content = `
                <h2>Research Grants</h2>
                <ul>
                    <li><a href="https://example.com/patent" target="_blank">Details of Govt. funded Grants(Last 5 years)</a></li>
                    <li><a href="https://example.com/consultancy" target="_blank">Details of Non Govt. funded Grants (last 5 years)</a></li>
                </ul>
            `;
            break;
	case 'doc_centres':
            content = `
                <h2>Doctoral Centres</h2>
                <ul>
                    	<li><a href="https://rajagiri.edu/academics/doctral-centre/centre-for-social-work" target="_blank">Social Work</a></li>
     	               	<li><a href="https://rajagiri.edu/academics/doctral-centre/centre-for-management-studies" target="_blank">Personnel Management</a></li>
			<li><a href="https://example.com/consultancy" target="_blank">Business Administration</a></li>
			<li><a href="https://example.com/consultancy" target="_blank">Computer Science</a></li>
			<li><a href="https://example.com/consultancy" target="_blank">Psychology</a></li>
			<li><a href="https://example.com/consultancy" target="_blank">Biosciences</a></li>
			<li><a href="https://example.com/consultancy" target="_blank">FPM programme</a></li>
                </ul>
            `;
            break;

	case 'consultancy':
            content = `
                <h2>Consultancy</h2>
                <ul>
                    <li><a href="https://example.com/patent" target="_blank">Consultancy Policy</a></li>
                    <li><a href="https://example.com/consultancy" target="_blank">Consultancy Revenue generated (last 5 years)</a></li>
                </ul>
            `;
            break;
	case 'organisation':
            content = `
                <h2>Organizational Strucutre and Policy Documents</h2>
                <ul>
                    <li><a href="https://example.com/patent" target="_blank">Organogram</a></li>
                    <li><a href="https://example.com/consultancy" target="_blank">Advisory Board</a></li>
		    <li><a href="https://example.com/consultancy" target="_blank">Board of Management</a></li>
		    <li><a href="https://example.com/consultancy" target="_blank">Governing Council</a></li>
		    <li><a href="https://example.com/consultancy" target="_blank">Academic Council</a></li>
		    <li><strong>Board of Studies</strong>
                        <ul>
                     	        <li><a href="https://example.com/bca-loa" target="_blank">Social Work</a></li>
				<li><a href="https://example.com/bca-loa" target="_blank">Personnel Management</a></li>
				<li><a href="https://example.com/bca-loa" target="_blank">Business Adminsitration</a></li>
				<li><a href="https://example.com/bca-loa" target="_blank">Computer Science</a></li>
				<li><a href="https://example.com/bca-loa" target="_blank">Library Science</a></li>
				<li><a href="https://example.com/bca-loa" target="_blank">Commerce</a></li>
				<li><a href="https://example.com/bca-loa" target="_blank">Psychology</a></li>
				<li><a href="https://example.com/bca-loa" target="_blank">Statistics</a></li>
                        </ul>
                    </li>
                </ul>
            `;
            break;
	case 'policy':
            content = `
                <h2>Policy Documents</h2>
                <ul>
                    <li><a href="https://example.com/patent" target="_blank">Research & Publication Policy</a></li>
			<li><a href="https://example.com/patent" target="_blank">Research Promotion Policy</a></li>
			<li><a href="https://example.com/patent" target="_blank">Rajagiri Minor Research Project (Seed Money) Funding Policy</a></li>
			<li><a href="https://example.com/patent" target="_blank">Consultancy Policy</a></li>
			<li><a href="https://example.com/patent" target="_blank">Code of Ethics Policy</a></li>
			<li><a href="https://example.com/patent" target="_blank">IT Policy</a></li>
			<li><a href="https://example.com/patent" target="_blank">Environmental & Energy Policy</a></li>
			<li><a href="https://example.com/patent" target="_blank">Rajagiri Swachh Campus Policy</a></li>
			<li><a href="https://example.com/patent" target="_blank">Rajagiri Water Conservation Policy</a></li>
			<li><a href="https://example.com/patent" target="_blank">Waste Management Policy</a></li>
			<li><a href="https://example.com/patent" target="_blank">Rajagiri - Scholarship Policy</a></li>
			<li><a href="https://example.com/patent" target="_blank">Library Policy</a></li>
			<li><a href="https://example.com/patent" target="_blank">E-Payment Policy</a></li>
			<li><a href="https://example.com/patent" target="_blank">E-Governance Policy</a></li>
			<li><a href="https://example.com/patent" target="_blank">Divyangjan Policy - Rajagiri</a></li>
			<li><a href="https://example.com/patent" target="_blank">Finance and Accounting Policy</a></li>
			<li><a href="https://example.com/patent" target="_blank">Faculty Policy</a></li>
			<li><a href="https://example.com/patent" target="_blank">Non-Teaching Policy</a></li>             
		 </ul>
            `;
            break;
	case 'committee':
            content = `
                <h2>Committees and Cells</h2>
                <ul>
                    	<li><a href="https://example.com/patent" target="_blank">Student Grievance Committee</a></li>
			<li><a href="https://example.com/patent" target="_blank">Anti-Ragging Cell</a></li>
			<li><a href="https://example.com/patent" target="_blank">Examination Committee</a></li>
			<li><a href="https://example.com/patent" target="_blank">Student Welfare Committee</a></li>
			<li><a href="https://example.com/patent" target="_blank">Library Management Committee</a></li>
			<li><a href="https://example.com/patent" target="_blank">Hostel Committee</a></li>
			<li><a href="https://example.com/patent" target="_blank">Placement Committee</a></li>
			<li><a href="https://example.com/patent" target="_blank">SC/ST Committee</a></li>
			<li><a href="https://example.com/patent" target="_blank">Research and Publication Committee</a></li>
			<li><a href="https://example.com/patent" target="_blank">Internal Complaints Committee</a></li>
			<li><a href="https://example.com/patent" target="_blank">Rajagiri Gender Equity Cell</a></li>
			<li><a href="https://example.com/patent" target="_blank">Divyangjan Committee</a></li>
			<li><a href="https://example.com/patent" target="_blank">Admission Advisory Committee</a></li>
			<li><a href="https://example.com/patent" target="_blank">Code of Conduct Committee</a></li>
			<li><a href="https://example.com/patent" target="_blank">Infrastructure Development and Maintenance Committee</a></li>
			<li><a href="https://example.com/patent" target="_blank">IT Committee</a></li>
			<li><a href="https://example.com/patent" target="_blank">Rajagiri Swachh Committee</a></li>
			<li><a href="https://example.com/patent" target="_blank">Rajagiri Website Committee</a></li>  
			<li><a href="https://example.com/patent" target="_blank">Institutional Ethics Committee IEC</a></li>    
			<li><a href="https://example.com/patent" target="_blank">Sports and Arts Committee</a></li>               
		 </ul>
            `;
            break;
	case 'admission':
            content = `
                <h2>Admissions</h2>
                <ul>
                    <li><a href="https://example.com/annual-admission-report-2023-2024" target="_blank">Annual Admission Report 2023-2024</a></li>
                    <li><a href="https://example.com/demand-ratio" target="_blank">Demand Ratio (last three years)</a></li>
                    <li><a href="https://example.com/prospectus" target="_blank">Prospectus</a></li>
                </ul>
            `;
            break;

        case 'curriculum':
            content = `
                <h2>Curriculum & Pedagogy</h2>
                <ul>
                    <li><a href="https://example.com/course-plan" target="_blank">Course Plan</a></li>
                    <li><a href="https://example.com/syllabi" target="_blank">Syllabi</a></li>
                    <li><a href="https://example.com/assurance-of-learning" target="_blank">Assurance of Learning</a></li>
                    <li><a href="https://example.com/assessment-development-centre" target="_blank">Assessment and Development Centre</a></li>
                    <li><a href="https://example.com/office-corporate-relations" target="_blank">Office of Corporate Relations</a></li>
                    <li><a href="https://example.com/mentoring-classes" target="_blank">Mentoring/Tutorial Classes/Remedial Classes</a></li>
                    <li><a href="https://example.com/simulations" target="_blank">Simulations</a></li>
                    <li><a href="https://example.com/lms" target="_blank">Learning Management Systems</a></li>
                    <li><a href="https://example.com/mooc-platforms" target="_blank">MOOC Platforms</a></li>
                </ul>
            `;
            break;

        case 'feedback':
            content = `
                <h2>Feedback System</h2>
                <ul>
                    <li><a href="https://example.com/stakeholder-feedback" target="_blank">Stakeholder Feedback</a></li>
                    <li><a href="https://example.com/faculty-appraisal" target="_blank">Faculty Appraisal</a></li>
                    <li><a href="https://example.com/orientation-trainings" target="_blank">Orientation and Trainings for Faculty</a></li>
                </ul>
            `;
            break;

        case 'examination':
            content = `
                <h2>Assessment and Evaluation</h2>
                <ul>
                    <li><a href="https://example.com/examination-manual" target="_blank">Examination Manual</a></li>
                    <li><a href="https://example.com/annual-exam-report-2023-2024" target="_blank">Annual Examination Report 2023-2024</a></li>
                    <li><a href="https://example.com/annual-exam-report-2023-2024" target="_blank">Pass percentage for 2024 outgoing batch</a></li>
                </ul>
            `;
            break;

        case 'progression':
            content = `
                <h2>Student Progression</h2>
                <ul>
                    <li><a href="https://example.com/consolidated-data-2023" target="_blank">Consolidated Data for year 2023 passout</a></li>
                    <li><a href="https://example.com/highest-ctc" target="_blank">Highest CTC</a></li>
                    <li><a href="https://example.com/lowest-ctc" target="_blank">Lowest CTC</a></li>
                    <li><a href="https://example.com/companies-visited" target="_blank">Companies Visited</a></li>
                    <li><a href="https://example.com/entrepreneurship-cell" target="_blank">Entrepreneurship Cell</a></li>
                    <li><a href="https://example.com/placement-report-2023-2024" target="_blank">Annual Placement Report 2023-2024</a></li>
                </ul>
            `;
            break;

        case 'sports':
            content = `
                <h2>Sports Facilties and Achievements</h2>
                <ul>
                    <li><a href="https://example.com/consolidated-data-2023" target="_blank">Indoor Games</a></li>
                    <li><a href="https://example.com/highest-ctc" target="_blank">Outdoor Games</a></li>
                    <li><a href="https://example.com/lowest-ctc" target="_blank">Sports Achievements</a></li>
                </ul>
            `;
            break;
        case 'fests':
            content = `
                <h2>Annual Events, Fests, and Milestones</h2>
                <ul>
                    <li><a href="https://example.com/consolidated-data-2023" target="_blank">Dyuti</a></li>
		    <li><a href="https://example.com/consolidated-data-2023" target="_blank">Infore</a></li>
                    <li><a href="https://example.com/highest-ctc" target="_blank">Euphoria</a></li>
                    <li><a href="https://example.com/lowest-ctc" target="_blank">Splendore</a></li>
		    <li><a href="https://example.com/lowest-ctc" target="_blank">Psyesta</a></li>
		    <li><a href="https://example.com/lowest-ctc" target="_blank">Student Achievements</a></li>
                </ul>
            `;
            break;
        case 'clubs':
            content = `
                <h2>Student Associations and Clubs</h2>
                <ul>
                    <li><a href="https://example.com/consolidated-data-2023" target="_blank">SWARAJ- Social Work Student Association</a></li>
		    <li><a href="https://example.com/consolidated-data-2023" target="_blank">FORMS- Management Student Association</a></li>
                    <li><a href="https://example.com/highest-ctc" target="_blank">CSTAR- Computer Science Student Association</a></li>
                    <li><a href="https://example.com/lowest-ctc" target="_blank">ACSSR- Commerce Student Association </a></li>
		    <li><a href="https://example.com/lowest-ctc" target="_blank">PSYSTAR- Psychology Student Association</a></li>
		    <li><a href="https://example.com/lowest-ctc" target="_blank">STATISTICA- Statistics Student Association</a></li>
		    <li><a href="https://example.com/lowest-ctc" target="_blank">Student Clubs</a></li>
                </ul>
            `;
            break;
    }
	
    thirdPane.innerHTML = content;
}

