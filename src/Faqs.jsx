
import { useState } from 'react';

export default function Faqs(){
    // Dummy FAQ data
    const faqData = [
        {
            id: 1,
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces, particularly web applications. It was created by Facebook and is now maintained by Meta and the community."
        },
        {
            id: 2,
            question: "How do I install React?",
            answer: "You can install React using npm or yarn. The most common way is to use Create React App: npx create-react-app my-app"
        },
        {
            id: 3,
            question: "What are React components?",
            answer: "React components are reusable pieces of UI that can be composed together to build complex user interfaces. They can be functional or class-based."
        },
        {
            id: 4,
            question: "What is JSX?",
            answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes React components more readable and easier to write."
        },
        {
            id: 5,
            question: "What is the difference between props and state?",
            answer: "Props are read-only data passed down from parent components, while state is mutable data that belongs to a specific component and can be updated using setState or useState hook."
        }
    ];

    // State to track which accordion items are open
    const [openItems, setOpenItems] = useState(new Set());
    
    // Function to toggle individual accordion item
    const toggleItem = (id) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            newOpenItems.add(id);
        }
        setOpenItems(newOpenItems);
    };

    // Function to expand all accordion items
    const expandAll = () => {
        setOpenItems(new Set(faqData.map(item => item.id)));
    };

    // Function to collapse all accordion items
    const collapseAll = () => {
        setOpenItems(new Set());
    };

    return(
        <div className="faqs-page">
            <div className="container">
                <div className="faqs-content-wrapper">
                    <h1 style={{textAlign:'center'}}>Frequently Asked Questions</h1>
                    
                    {/* Expand/Collapse All Buttons */}
                    <div className="accordion-controls" style={{ marginBottom: '20px', textAlign: 'right' }}>
                        <button 
                            onClick={expandAll}
                            className="btn btn-primary"
                            style={{ 
                                marginRight: '10px',
                                padding: '8px 16px',
                                backgroundColor: '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Expand All
                        </button>
                        <button 
                            onClick={collapseAll}
                            className="btn btn-secondary"
                            style={{ 
                                padding: '8px 16px',
                                backgroundColor: '#6c757d',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Collapse All
                        </button>
                    </div>

                    {/* Accordion */}
                    <div className="accordion">
                        {faqData.map((faq) => (
                            <div key={faq.id} className="accordion-item" style={{ 
                                border: '1px solid #ddd',
                                marginBottom: '10px',
                                borderRadius: '4px',
                                overflow: 'hidden'
                            }}>
                                <div 
                                    className="accordion-header"
                                    onClick={() => toggleItem(faq.id)}
                                    style={{
                                        padding: '15px 20px',
                                        backgroundColor: '#f8f9fa',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        color: '#000',
                                        borderBottom: openItems.has(faq.id) ? '1px solid #ddd' : 'none'
                                    }}
                                >
                                    <h3 style={{ 
                                        margin: 0, 
                                        fontSize: '16px',
                                        fontWeight: '500'
                                    }}>
                                        {faq.question}
                                    </h3>
                                    <span style={{ 
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        transform: openItems.has(faq.id) ? 'rotate(45deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease'
                                    }}>
                                        +
                                    </span>
                                </div>
                                {openItems.has(faq.id) && (
                                    <div className="accordion-content" style={{
                                        padding: '20px',
                                        backgroundColor: 'white',
                                        borderTop: '1px solid #ddd'
                                    }}>
                                        <p style={{ 
                                            margin: 0,
                                            lineHeight: '1.6',
                                            color: '#333'
                                        }}>
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}