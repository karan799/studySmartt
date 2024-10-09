import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Header from './Header';
import Main from './components/Mainn';
import Mainn from './components/Mainn';
import Loader from './components/Loader';
import Error from './components/Error';
import StarttState from './components/StarttState';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import FinishedScreen from './components/FinishedScreen';
import ChatBot from './components/ChatBot';
import HomePage from './components/HomePage';
import EntryPage from './components/EntryPage';
import Home from './components/Home';
import LoginPage from './components/LoginPage';

const initialState = {
  questions: [
    {
      question: "I want to find out more about a tour that I am going on. I would:",
      options: [
        "Use a map and see where the places are.",
        "Look at details about the highlights and activities on the tour.",
        "Talk with the person who planned the tour or others who are going on the tour.",
        "Read about the tour on the itinerary."
      ],
      correctOption: 2,
      points: 10
    },
    {
      "question": "When learning from the Internet I like:",
      "options": [
        "Detailed articles.",
        "Videos showing how to do things.",
        "Podcasts and videos where I can listen to experts.",
        "Interesting design and visual features."
      ],
      "correctOption": 1,
      "points": 10
    },
    {
        "question": "I want to learn how to play a new board game or card game. I would:",
        "options": [
            "Use the diagrams that explain the various stages, moves and strategies in the game.",
        "Read the instructions.",
        "Watch others play the game before joining in.",
        "Listen to somebody explaining it and ask questions."
      ],
      "correctOption": 3,
      "points": 10
    },
    {
        "question": "I want to save more money and to decide between a range of options. I would:",
        "options": [
            "Use graphs showing different options for different time periods.",
            "Read a print brochure that describes the options in detail.",
            "Talk with an expert about the options.",
            "Consider examples of each option using my financial information."
        ],
        "correctOption": 2,
        "points": 10
      },
      {
          "question": "I am having trouble assembling a wooden table that came in parts (kitset). I would:",
          "options": [
              "Watch a video of a person assembling a similar table.",
              "Study diagrams showing each stage of the assembly.",
              "Ask for advice from someone who assembles furniture.",
              "Read the instructions that came with the table."
            ],
            "correctOption": 1,
            "points": 10
          },
          {
              "question": "I want to learn about a new project. I would ask for:",
              "options": [
                  "Examples where the project has been used successfully.",
                  "A written report describing the main features of the project.",
                  "An opportunity to discuss the project.",
                  "Diagrams to show the project stages with charts of benefits and costs."
                ],
                "correctOption": 2,
                "points": 10
              },
              {
                  "question": "When choosing a career or area of study, these are important for me:",
                  "options": [
                      "Using words well in written communications.",
            "Working with designs, maps or charts.",
            "Communicating with others through discussion.",
            "Applying my knowledge in real situations."
          ],
          "correctOption": 3,
          "points": 10
        },
        {
            "question": "When finding my way, I:",
            "options": [
                "Like to read instructions from GPS or instructions that have been written.",
                "Rely on verbal instructions from GPS or from someone traveling with me.",
                "Rely on paper maps or GPS maps.",
                "Head in the general direction to see if I can find my destination without instructions."
              ],
              "correctOption": 0,
              "points": 10
            },
            {
                "question": "I want to learn how to take better photos. I would:",
                "options": [
                    "Use diagrams showing the camera and what each part does.",
                    "Use examples of good and poor photos showing how to improve them.",
                    "Use the written instructions about what to do.",
                    "Ask questions and talk about the camera and its features."
                  ],
                  "correctOption": 1,
                  "points": 10
                },
                {
                    "question": "I want to find out more about a tour that I am going on. I would:",
                    "options": [
            "Use a map and see where the places are.",
            "Look at details about the highlights and activities on the tour.",
            "Talk with the person who planned the tour or others who are going on the tour.",
            "Read about the tour on the itinerary."
          ],
          "correctOption": 2,
          "points": 10
        },
  ],
  status: 'ready',
  index: 0,
  answer: null,
  points: [0, 0, 0, 0]
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready'
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error'
      };
    case 'start':
      return {
        ...state,
        status: 'active'
      };
    case 'inc':
      return {
        ...state,
        index: state.index + 1,
        answer: null
      };
    case 'newAnswer':
      return {
        ...state,
        answer: action.payload,
        points: state.points.map((point, index) =>
          index === action.payload ? point + 1 : point
        )
      };
    case 'finish':
      console.error('Error predicting learning style:', action.payload);

      return {
        ...state,
        status: 'finished'
      };
    case 'search':
      return {
        ...state,
        status: 'search'
      };
    default:
      throw new Error('action unknown');
  }
}

async function sendPointsToBackend(points, setCategory) {
  try {
    const response = await axios.post('http://localhost:5001/api/predict', {
      user_responses: points
    });
    const category = response.data.predicted_learning_style;
    setCategory(category);
    console.error('Error predicting learning stylehhhhh:', category);

    return category;
  } catch (error) {
    console.error('Error predicting learning style:', error);
  }
}

export default function App() {
  const [category, setCategory] = useState('');
  const [headerHidden, setHeaderHidden] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status, index, answer, points } = state;
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev, curr) => prev + curr.points, 0);

  useEffect(() => {
    // fetch('http://localhost:8000/questions')
    //   .then(res => res.json())
    //   .then(data => dispatch({ type: 'dataReceived', payload: data }))
    //   .catch(() => dispatch({ type: 'dataFailed' }));
  }, []);

  const handleFinish = async () => {
    const category = await sendPointsToBackend(points, setCategory);
    console.error('Error predicting learning style:', category);

    console.log(category);
    dispatch({ type: 'finish', payload: category });
  };

  return (
    <div className="app">
      {/* <LoginPage/> */}
      {headerHidden && <HomePage setHeaderHidden={setHeaderHidden} category={category} dispatch={dispatch} />}
      {!headerHidden && (
        <Mainn>
          {status === 'loading' && <Loader />}
          {status === 'error' && <Error />}
          {status === 'ready' && <StarttState numQuestions={numQuestions} dispatch={dispatch} />}
          {status === 'active' && (
            <>
              <Progress
                index={index}
                numQuestions={numQuestions}
                points={points}
                answer={answer}
                maxPossiblePoints={maxPossiblePoints}
              />
              <Question questions={questions} index={index} dispatch={dispatch} answer={answer} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
                handleFinish={handleFinish}
              />
            </>
          )}
          {status === 'finished' && (
            <FinishedScreen
              category={category}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              dispatch={dispatch}
              setHeaderHidden={setHeaderHidden}
            />
          )}
          {status === 'search' && <ChatBot category={category} setCategory={setCategory} />}
        </Mainn>
      )}
    </div>
  );
}