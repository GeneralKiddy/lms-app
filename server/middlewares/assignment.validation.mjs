export const validateCreateAssignmentData = (req, res, next) => {
    if (!req.body.title) { 
        return res.status(401).json({ 
            message: "กรุณาส่งข้อมูล Title ของแบบทดสอบเข้ามาด้วย" 
        }) 
    };
    if (!req.body.content) { 
        return res.status(401).json({ 
            message: "กรุณาส่งข้อมูล Content ของแบบทดสอบเข้ามาด้วย" 
        })  
    };
    if (!req.body.category) { 
        return res.status(401).json({ 
            message: "กรุณาส่งข้อมูล Category ของแบบทดสอบเข้ามาด้วย" 
        })   
    };
    if (!req.body.email) { 
        return res.status(401).json({ 
            message: "กรุณาส่งข้อมูล Email ของผู้สร้างแบบทดสอบเข้ามาด้วย" 
        })  
    };

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const correctEmail = emailFormat.test(req.body.email)
    if (!correctEmail) { 
        return res.status(401).json({ 
            message: "กรุณาส่งข้อมูล Email ของผู้สร้างแบบทดสอบตามที่กำหนดให้ถูกต้อง" 
        })   
    };

    const assignmentCategoryList = ["Math", "English", "Biology"]
    const hasAssignmentCategoryList = assignmentCategoryList.includes(req.body.category)
    if (!hasAssignmentCategoryList) { 
        return res.status(401).json({ 
            message: "กรุณาส่งข้อมูล Category ของแบบทดสอบตามที่กำหนด เช่น 'Math', 'English' หรือ 'Biology'" 
        })   
    };

    if (!(req.body.content.length >= 50 && req.body.content.length <= 1000)) { 
        return res.status(401).json({ 
            message: "กรุณาส่งข้อมูล Content ของแบบทดสอบตามที่กำหนดระหว่าง 500 - 1000 ตัวอักษร" 
        })    
    };

    next()
}

