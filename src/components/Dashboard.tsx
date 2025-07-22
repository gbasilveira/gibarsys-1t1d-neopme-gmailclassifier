import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Title3,
  Body1,
  Button,
  Badge,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { 
  MailRegular, 
  PersonRegular, 
  BuildingRegular, 
  DocumentRegular 
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '32px',
  },
  statsCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  statIcon: {
    fontSize: '32px',
    color: tokens.colorBrandForeground1,
  },
  statContent: {
    flex: '1',
  },
  statValue: {
    fontSize: '32px',
    fontWeight: '600',
    color: tokens.colorNeutralForeground1,
    margin: '0',
  },
  statLabel: {
    fontSize: '14px',
    color: tokens.colorNeutralForeground2,
    margin: '0',
  },
  actionsCard: {
    gridColumn: '1 / -1',
  },
  actionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
  },
});

export const Dashboard: React.FC = () => {
  const styles = useStyles();

  const stats = [
    {
      icon: MailRegular,
      value: '1,234',
      label: 'Emails Classified',
      color: tokens.colorBrandForeground1,
    },
    {
      icon: PersonRegular,
      value: '156',
      label: 'People in Graph',
      color: tokens.colorPaletteGreenForeground1,
    },
    {
      icon: BuildingRegular,
      value: '23',
      label: 'Companies Tracked',
      color: tokens.colorPaletteBlueForeground1,
    },
    {
      icon: DocumentRegular,
      value: '45',
      label: 'Active Rules',
      color: tokens.colorPaletteYellowForeground1,
    },
  ];

  const quickActions = [
    {
      title: 'Classify Current Thread',
      description: 'Apply AI classification to the currently selected email thread',
      action: 'Classify Now',
      href: '/classify',
    },
    {
      title: 'Chat with Assistant',
      description: 'Get help with classification rules or ask questions about your emails',
      action: 'Start Chat',
      href: '/chat',
    },
    {
      title: 'Manage Rules',
      description: 'Create, edit, or delete classification rules',
      action: 'View Rules',
      href: '/settings',
    },
  ];

  return (
    <div>
      <Title3>Dashboard</Title3>
      <Body1>Welcome to your Gmail Graph-Classifier dashboard.</Body1>

      <div className={styles.container}>
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent>
              <div className={styles.statsCard}>
                <stat.icon className={styles.statIcon} />
                <div className={styles.statContent}>
                  <p className={styles.statValue}>{stat.value}</p>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className={styles.actionsCard}>
          <CardHeader header={<Title3>Quick Actions</Title3>} />
          <CardContent>
            <div className={styles.actionGrid}>
              {quickActions.map((action) => (
                <Card key={action.title}>
                  <CardContent>
                    <Title3>{action.title}</Title3>
                    <Body1>{action.description}</Body1>
                    <Button appearance="primary" href={action.href}>
                      {action.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};