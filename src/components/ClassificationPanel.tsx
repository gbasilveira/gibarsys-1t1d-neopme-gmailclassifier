import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Title3,
  Body1,
  Button,
  Textarea,
  Input,
  Label,
  Badge,
  makeStyles,
  tokens,
  Spinner,
} from '@fluentui/react-components';
import { 
  MailRegular, 
  SendRegular, 
  CheckmarkRegular,
  ErrorRegular 
} from '@fluentui/react-icons';
import type { EmailThread, ClassificationResult } from '@/types';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
    height: 'calc(100vh - 120px)',
  },
  inputSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  threadInput: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  resultSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  resultCard: {
    flex: '1',
    overflow: 'auto',
  },
  labelList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '16px',
  },
  confidenceBar: {
    width: '100%',
    height: '8px',
    backgroundColor: tokens.colorNeutralBackground3,
    borderRadius: '4px',
    overflow: 'hidden',
    marginTop: '8px',
  },
  confidenceFill: {
    height: '100%',
    backgroundColor: tokens.colorPaletteGreenForeground1,
    transition: 'width 0.3s ease',
  },
  reasoning: {
    marginTop: '16px',
    padding: '12px',
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: '4px',
    fontSize: '14px',
    lineHeight: '1.5',
  },
});

export const ClassificationPanel: React.FC = () => {
  const styles = useStyles();
  const [threadId, setThreadId] = useState<string>('');
  const [isClassifying, setIsClassifying] = useState<boolean>(false);
  const [result, setResult] = useState<ClassificationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleClassify = async (): Promise<void> => {
    if (!threadId.trim()) {
      setError('Please enter a thread ID');
      return;
    }

    setIsClassifying(true);
    setError(null);
    setResult(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock result
      const mockResult: ClassificationResult = {
        threadId,
        labels: [
          { id: '1', name: 'Project Alpha', type: 'custom', color: '#107C10' },
          { id: '2', name: 'High Priority', type: 'custom', color: '#D13438' },
          { id: '3', name: 'Client Communication', type: 'custom', color: '#0F6CBD' },
        ],
        confidence: 0.85,
        reasoning: 'This email thread was classified as Project Alpha with high confidence based on the presence of project-specific keywords and participant patterns. The high priority label was applied due to urgent language and time-sensitive content.',
        appliedAt: new Date(),
      };

      setResult(mockResult);
    } catch (err) {
      setError('Failed to classify thread. Please try again.');
    } finally {
      setIsClassifying(false);
    }
  };

  const handleBulkClassify = async (): Promise<void> => {
    // Implementation for bulk classification
    console.log('Bulk classification not implemented yet');
  };

  return (
    <div>
      <Title3>Email Classification</Title3>
      <Body1>Classify email threads using AI-powered graph-based rules.</Body1>

      <div className={styles.container}>
        <div className={styles.inputSection}>
          <Card>
            <CardHeader header={<Title3>Input</Title3>} />
            <CardContent>
              <div className={styles.threadInput}>
                <Label htmlFor="threadId">Thread ID</Label>
                <Input
                  id="threadId"
                  value={threadId}
                  onChange={(e) => setThreadId(e.target.value)}
                  placeholder="Enter Gmail thread ID"
                  disabled={isClassifying}
                />
              </div>

              <div style={{ marginTop: '16px' }}>
                <Button
                  appearance="primary"
                  onClick={handleClassify}
                  disabled={isClassifying || !threadId.trim()}
                  icon={isClassifying ? <Spinner size="tiny" /> : <MailRegular />}
                >
                  {isClassifying ? 'Classifying...' : 'Classify Thread'}
                </Button>
              </div>

              <div style={{ marginTop: '8px' }}>
                <Button
                  appearance="outline"
                  onClick={handleBulkClassify}
                  disabled={isClassifying}
                >
                  Bulk Classify
                </Button>
              </div>

              {error && (
                <div style={{ 
                  marginTop: '16px', 
                  padding: '12px', 
                  backgroundColor: tokens.colorPaletteRedBackground1,
                  color: tokens.colorPaletteRedForeground1,
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <ErrorRegular />
                  {error}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className={styles.resultSection}>
          <Card className={styles.resultCard}>
            <CardHeader header={<Title3>Classification Result</Title3>} />
            <CardContent>
              {result ? (
                <div>
                  <div>
                    <strong>Thread ID:</strong> {result.threadId}
                  </div>
                  
                  <div style={{ marginTop: '16px' }}>
                    <strong>Confidence:</strong> {(result.confidence * 100).toFixed(1)}%
                    <div className={styles.confidenceBar}>
                      <div 
                        className={styles.confidenceFill}
                        style={{ width: `${result.confidence * 100}%` }}
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: '16px' }}>
                    <strong>Applied Labels:</strong>
                    <div className={styles.labelList}>
                      {result.labels.map((label) => (
                        <Badge
                          key={label.id}
                          appearance="filled"
                          color={label.color as any}
                        >
                          {label.name}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className={styles.reasoning}>
                    <strong>Reasoning:</strong>
                    <p>{result.reasoning}</p>
                  </div>

                  <div style={{ marginTop: '16px' }}>
                    <Button appearance="primary" icon={<CheckmarkRegular />}>
                      Apply Labels
                    </Button>
                  </div>
                </div>
              ) : (
                <div style={{ 
                  textAlign: 'center', 
                  color: tokens.colorNeutralForeground2,
                  padding: '32px'
                }}>
                  <MailRegular style={{ fontSize: '48px', marginBottom: '16px' }} />
                  <p>Enter a thread ID and click "Classify Thread" to see results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};